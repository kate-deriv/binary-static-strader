import { getDecimalPlaces }                from '_common/base/currency_base';
import { isDeepEqual }                     from '_common/utility';
import {
    convertToUnix,
    toMoment }                             from 'Utils/Date';
import {
    proposal_properties_alternative_names,
    removable_proposal_properties }        from '../Constants/query_string';

export const getProposalInfo = (store, response, obj_prev_contract_basis) => {
    const proposal = response.proposal || {};
    const profit   = (proposal.payout - proposal.ask_price) || 0;
    const returns  = profit * 100 / (proposal.ask_price || 1);
    const stake    = proposal.display_value;

    const contract_basis = (store.basis_list.find(o => o.value !== store.basis));
    let has_increased    = proposal[contract_basis.value] > obj_prev_contract_basis.value;

    if (proposal[contract_basis.value] === obj_prev_contract_basis.value) {
        has_increased = null;
    }

    const obj_contract_basis = {
        text : contract_basis.text,
        value: contract_basis.text === 'Stake' ? stake : proposal[contract_basis.value],
    };

    return {
        id       : proposal.id || '',
        has_error: !!response.error,
        has_increased,
        message  : proposal.longcode || response.error.message,
        obj_contract_basis,
        payout   : proposal.payout,
        profit   : profit.toFixed(getDecimalPlaces(store.currency)),
        returns  : `${returns.toFixed(2)}%`,
        stake,
    };
};

export const createProposalRequests = (store) => {
    const requests = {};

    Object.keys(store.trade_types).forEach((type) => {
        const new_req     = createProposalRequestForContract(store, type);
        const current_req = store.proposal_requests[type];
        if (!isDeepEqual(new_req, current_req)) {
            requests[type] = new_req;
        }
    });

    return requests;
};

const createProposalRequestForContract = (store, type_of_contract) => {
    const obj_expiry = {};
    if (store.expiry_type === 'endtime') {
        const expiry_date = toMoment(store.expiry_date);
        const start_date  = toMoment(store.start_date || store.root_store.common.server_time);
        const is_same_day = expiry_date.isSame(start_date, 'day');
        const expiry_time = is_same_day ? store.expiry_time : '23:59:59';
        obj_expiry.date_expiry = convertToUnix(expiry_date.unix(), expiry_time);
    }

    return {
        proposal     : 1,
        subscribe    : 1,
        amount       : parseFloat(store.amount),
        basis        : store.basis,
        contract_type: type_of_contract,
        currency     : store.root_store.client.currency,
        symbol       : store.symbol,
        ...(
            store.start_date &&
            { date_start: convertToUnix(store.start_date, store.start_time) }
        ),
        ...(
            store.expiry_type === 'duration' ?
                {
                    duration     : parseInt(store.duration),
                    duration_unit: store.duration_unit,
                }
                :
                obj_expiry
        ),
        ...(
            (store.barrier_count > 0 || store.form_components.indexOf('last_digit') !== -1) &&
            { barrier: store.barrier_1 || store.last_digit }
        ),
        ...(
            store.barrier_count === 2 &&
            { barrier2: store.barrier_2 }
        ),
    };
};

export const getProposalParametersName = (proposal_requests) => {
    const proper_param_name = [];
    const is_digit = Object.keys(proposal_requests)
        .findIndex(i => i.toUpperCase().indexOf('DIGIT') > -1) > -1;

    const keys = Object.keys(Object.values(proposal_requests)[0]);

    keys.forEach(name => {
        const alternative_name = proposal_properties_alternative_names[name];

        if (alternative_name) {
            proper_param_name.push(typeof alternative_name === 'string' ? alternative_name : alternative_name(is_digit));
        } else if (removable_proposal_properties.indexOf(name) === -1) {
            proper_param_name.push(name);
        }
    });

    proper_param_name.sort();
    return proper_param_name;
};
