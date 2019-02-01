import PropTypes                    from 'prop-types';
import React                        from 'react';
import { IconBack }                 from 'Assets/Common/icon_back.jsx';
import { IconChevronLeft }          from 'Assets/Common/icon_chevron_left.jsx';
import { IconChevronRight }         from 'Assets/Common/icon_chevron_right.jsx';
import { TradeCategories }          from 'Assets/Trading/Categories/trade_categories.jsx';
import Button                       from 'App/Components/Form/button.jsx';
import { localize }                 from '_common/localize';

const ContractTypeItem = ({
    handleNavigationClick,
    handleNextClick,
    handlePrevClick,
    is_mobile,
    item,
    navigationList,
    onBackButtonClick,
    onSubmitButtonClick,
}) => (
    <React.Fragment>
        {!is_mobile &&
        <div className='info-header'>
            <span onClick={() => onBackButtonClick()}>
                <IconBack />
            </span>
            <span className='title'>{item.text}</span>
        </div>
        }
        <div className='info-gif'>
            gif explanation
        </div>
        <div className='info-content'>
            <TradeCategories category={item.value} />
        </div>
        <Button className='info-choose' text={localize('CHOOSE')} onClick={() => onSubmitButtonClick(item)} />
        <div className='info-navigation'>
            <div className='info-navigation__icon' onClick={() => handlePrevClick(navigationList)} >
                <IconChevronLeft />
            </div>
            <div className='info-navigation__list'>
                {
                    navigationList.map((contract, idx) => (
                        <React.Fragment key={idx}>
                            <div
                                className={`circle-button ${contract.value === item.value ? 'active' : ''}`}
                                onClick={() => handleNavigationClick(contract)}
                            />
                        </React.Fragment>
                    ))
                }
            </div>
            <div className='info-navigation__icon' onClick={() => handleNextClick(navigationList)} >
                <IconChevronRight />
            </div>
        </div>
    </React.Fragment>
);

ContractTypeItem.propTypes = {
    handleNavigationClick: PropTypes.func,
    handleNextClick      : PropTypes.func,
    handlePrevClick      : PropTypes.func,
    is_mobile            : PropTypes.bool,
    item                 : PropTypes.object,
    navigationList       : PropTypes.array,
    onBackButtonClick    : PropTypes.func,
    onSubmitButtonClick  : PropTypes.func,
};

export default ContractTypeItem;