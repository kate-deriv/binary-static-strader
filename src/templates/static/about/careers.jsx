import React from 'react';
import SeparatorLine from '../../_common/components/separator_line.jsx';
import Step from '../../_common/components/step.jsx';

const Box = ({
    gr,
    text,
    icon,
    href,
    download,
    target,
    padding,
}) => (
    <div className={`${gr ? `${gr} gr-12-m` : 'gr-6 gr-12-m'} box-container ${icon ? `${padding ? `gr-padding-${padding}` : ''}` : 'padding'}`}>
        <div className='box bordered'>
            <div className='items'>
                { icon &&
                    <div><img className='' src={it.url_for(icon)} /></div>
                }
                { href ?
                    <div className='box-item-end'>
                        <a
                            href={href}
                            target={target || undefined}
                            download={!!download}
                            rel={/^http/.test(href) ? 'noopener noreferrer' : undefined}
                        >
                            <p className='center-text'>{text}</p>
                        </a>
                    </div>
                    :
                    <p className='center-text'>{text}</p>
                }
            </div>
        </div>
    </div>
);

const ColumnSM = ({ gr, header, paragraph }) => (
    <div className={`gr-${gr ? `${gr} gr-12-m` : '3 gr-12-m'}`}>
        <h4>{header}</h4>
        <SeparatorLine no_wrapper sub_class='header-line' />
        <p className='column-margin'>{paragraph}</p>
    </div>
);

const ColumnValues = ({ gr, icon, header }) => (
    <div className={`gr-${gr ? `${gr} gr-12-m` : '3 gr-6-p gr-12-m'}`}>
        <div className='values-box'>
            <img className='responsive values-box-icon' src={it.url_for(`images/pages/careers/${icon}.svg`)} />
            <div className='fill-text'>
                <h4 className='values-box-subheader'>{header}</h4>
            </div>
        </div>
    </div>
);


const ColumnLG = ({ center, image, text, link }) => (
    <div className={`gr-4 gr-12-m${center ? ' center-text' : ''}`}>
        <div>
            <p className='column-margin'>{text}</p>
        </div>
        <img className='responsive' src={it.url_for(`images/pages/careers/${image}.jpg`)} />
        {!!link &&
            <div className='fill-text'>
                <a href={link}><span>{it.L('Learn more')}</span></a>
            </div>
        }
    </div>
);

const CareerStep = ({ ...props }) => (
    <Step centered={false} {...props} />
);

const Careers = () => {
    const url_open_positions = it.url_for('open-positions/job-details');

    return (
        <div className='static_full career'>
            <div className='top-banner'>
                <div className='banner-caption'>
                    <div className='caption-text'>
                        <h1>{it.L('Imagine')}</h1>
                        <p>{it.L('Imagine a workplace where your individuality, creativity and sense of adventure are valued and rewarded.')}</p>
                    </div>
                </div>
            </div>
            <div className='margin-top-100'>
                <div className='container gr-row gr-padding-30'>
                    <ColumnSM header={it.L('Ideas')}    paragraph={it.L('Where new ideas trump safe, old ones. And you\'re free to work your way, free from hierarchies and red tape.')} />
                    <ColumnSM header={it.L('Freedom')}  paragraph={it.L('Where your experience, drive and talent can propel you in unknown directions. And you have the freedom to push into new frontiers.')} />
                    <ColumnSM header={it.L('Teamwork')} paragraph={it.L('Where teamwork and a collaborative culture form the platform for personal and corporate growth.')} />
                    <ColumnSM header={it.L('Support')}  paragraph={it.L('Where supportive colleagues are like a second family.')} />
                </div>

                <div className='container gr-row'>
                    <div className='gr-12'>
                        <SeparatorLine no_wrapper sub_class='gr-padding-10' />
                    </div>
                </div>

                <div className='values-group'>
                    <div className='container gr-row gr-padding-10 center-text'>
                        <div className='gr-12 gr-padding-30'>
                            <h1>{it.L('Our values')}</h1>
                        </div>

                        <ColumnValues header={it.L('Integrity')} icon='ic-intergrity'/>
                        <ColumnValues header={it.L('Teamwork')} icon='ic-teamwork' />
                        <ColumnValues header={it.L('Competence')} icon='ic-competence' />
                        <ColumnValues header={it.L('Customer focus')} icon='ic-customer-focus' />

                        <div className='fill-text center-element btn-margin-top'>
                            <a className='button-secondary' href={it.url_for('about-us?anchor=our-values')}>
                                <span>{it.L('Learn more')}</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='fill-bg-color location-section'>
                    <div className='container gr-row gr-padding-20 center-text'>
                        <div className='gr-12 gr-padding-20'>
                            <h1>{it.L('Our locations')}</h1>
                        </div>
                        <ColumnLG image='malta@1'   text={it.L('Malta')}               link={it.url_for('malta')} />
                        <ColumnLG image='my@2'      text={it.L('Cyberjaya, Malaysia')} link={it.url_for('cyberjaya')} />
                        <ColumnLG image='labuan@2'  text={it.L('Labuan, Malaysia')}    link={it.url_for('labuan')} />
                    </div>
                </div>

                <div className='container'>
                    <div className='gr-row gr-padding-30'>
                        <ColumnSM gr='4' header={it.L('Want to telecommute?')} paragraph={it.L('[_1] is a dynamic and flexible workplace. As well as our offices, we have employees who choose to telecommute from their home offices in countries around the world. If that suits you, we\'re open to it.', it.website_name) } />
                        <ColumnSM gr='4' header={it.L('Where you can go')}     paragraph={it.L('Kick back with beautiful beaches, islands, and mountains just a short flight away. From Malta, you have Europe, the Mediterranean, and North Africa. And from Malaysia, the whole of Asia awaits.') } />
                        <ColumnSM gr='4' header={it.L('More benefits')}        paragraph={it.L('We offer a market-based salary, annual performance bonus, health benefits, travel and internet allowances, and company trips. Enjoy a high standard of living, whether you\'re in Malta, or Malaysia.')} />
                    </div>
                    <div className='gr-padding-20'>
                        <div className='gr-padding-30 center-text'>
                            <a className='button' href={it.url_for('open-positions')}>
                                <span>{it.L('View open positions')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='center-banner'>
                <div className='caption-text'>
                    <h1>{it.L('Ideas, opinions and insights from the people behind [_1]', it.website_name)}</h1>
                    <p>{it.L('Passionate about people, culture, management, and software development? Explore what we do, what matters to us, and how we bring our ideas to life.')}</p>
                </div>
            </div>
            <div className='container'>
                <div className='gr-row gr-padding-30'>
                    <Box
                        gr='gr-3 gr-6-p'
                        padding='20'
                        icon='images/pages/careers/tb-icon.svg'
                        href='https://tech.binary.com'
                        text={it.L('Read the [_1] tech blog', it.website_name)}
                        target='_blank'
                    />
                    <Box
                        gr='gr-3 gr-6-p'
                        padding='20'
                        icon='images/pages/careers/bb-icon.svg'
                        href='https://blog.binary.com'
                        text={it.L('Read the [_1] company blog', it.website_name)}
                        target='_blank'
                    />
                    <Box
                        gr='gr-3 gr-6-p'
                        padding='20'
                        icon='images/pages/careers/cc-icon.svg'
                        href='https://my.wobb.co/users/companies/binary-group-services-sdn-bhd'
                        text={it.L('Learn more about our corporate culture')}
                        target='_blank'
                    />
                    <Box
                        gr='gr-3 gr-6-p'
                        padding='20'
                        icon='images/pages/careers/eh-icon.svg'
                        href={it.url_for('download/binary-employee-handbook.pdf')}
                        download
                        text={it.L('Employee handbook')}
                        target='_blank'
                    />
                </div>
            </div>

            <div className='container'>
                <div className='gr-padding-30 center-text'>
                    <h1 data-anchor>{it.L('Open positions')}</h1>
                    <p>{it.L('[_1] is always looking to add experienced professionals to its talented team of administrators, technical contributors, and managers. To support our continued growth, we\'ve developed a number of exciting career opportunities in the following areas:', it.website_name)}</p>
                </div>
                <div className='gr-row'>
                    <Box gr='gr-6' href={`${url_open_positions}?dept=information_technology#devops_manager`}                    text={it.L('Information technology')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=quality_assurance#quality_assurance_engineer`}             text={it.L('Quality assurance')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=quantitative_analysis#quantitative_developer`}             text={it.L('Quantitative analysis')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=marketing#marketing_project_coordinator`}                  text={it.L('Marketing')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=accounting#accounts_and_payments_executive`}               text={it.L('Accounting')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=compliance#compliance_executive`}                          text={it.L('Compliance')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=customer_support#global_customer_service_representatives`} text={it.L('Customer support')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=human_resources#human_resource_executive`}                 text={it.L('Human resources')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=administrator#administrative_executive`}                   text={it.L('Administration and HR')} />
                    <Box gr='gr-6' href={`${url_open_positions}?dept=internal_audit#internal_auditor`}                          text={it.L('Internal audit')} />
                </div>

                <div className='gr-padding-10 center-text btn-margin-top'>
                    <a className='button' href={it.url_for('open-positions')}>
                        <span>{it.L('View open positions')}</span>
                    </a>
                </div>

                <SeparatorLine no_wrapper sub_class='gr-padding-10' />
            </div>

            <div className='container'>
                <div className='gr-padding-30 center-text'>
                    <h1>{it.L('Interview process')}</h1>
                </div>
                <div className='has-tabs'>
                    <ul className='role-section'>
                        <li className='role'><a className='role-btn' href='#technical'><span>{it.L('Technical roles')}</span></a></li>
                        <li className='role'><a className='role-btn' href='#non-technical'><span>{it.L('Non-technical roles')}</span></a></li>
                    </ul>
                    <div id='technical'>
                        <div className='gr-padding-30'>
                            <div className='steps gr-padding-10'>
                                <CareerStep
                                    text={it.L('Send us your CV and cover letter. We\'ll compare your skills and experience with our requirements.')}
                                    circle_no='1'
                                />
                                <CareerStep
                                    text={it.L('If you\'re shortlisted, we\'ll invite you to a hackathon or send you a talent test.')}
                                    circle_no='2'
                                />
                                <CareerStep
                                    text={it.L('If you score well in the hackathon or talent test, we\'ll send you a Self-Assessment Topgrading Interview (SATI) questionnaire. Do well on the SATI and we\'ll invite you for an interview with a member of our recruitment team.')}
                                    circle_no='3'
                                />
                            </div>
                            <div className='steps gr-padding-10'>
                                <CareerStep
                                    text={it.L('Made an impression in the first interview? We\'ll invite you to a second interview with our CEO and/or hiring manager.')}
                                    circle_no='4'
                                />
                                <CareerStep
                                    text={it.L('If we decide to extend an offer, we\'ll conduct background and reference checks.')}
                                    circle_no='5'
                                />
                                <CareerStep
                                    text={it.L('Congratulations! We\'ll make you a fair and competitive offer, and we don\'t make you negotiate in order to eliminate salary inequities and stress.')}
                                    circle_no='6'
                                />
                            </div>
                        </div>
                    </div>
                    <div id='non-technical'>
                        <div className='gr-padding-30'>
                            <div className='steps gr-padding-10'>
                                <CareerStep
                                    text={it.L('Send us your CV and cover letter. We\'ll compare your skills and experience with our requirements.')}
                                    circle_no='1'
                                />
                                <CareerStep
                                    text={it.L('If you\'re shortlisted, we\'ll send you a Self-Assessment Topgrading Interview (SATI) questionnaire.')}
                                    circle_no='2'
                                />
                                <CareerStep
                                    text={it.L('If you score well on the SATI, we\'ll send you a talent test. Do well on the talent test and and we\'ll invite you for an interview with a member of our recruitment team.')}
                                    circle_no='3'
                                />
                            </div>
                            <div className='steps gr-padding-10'>
                                <CareerStep
                                    text={it.L('Made an impression in the first interview? We\'ll invite you to a second interview with our CEO and/or hiring manager.')}
                                    circle_no='4'
                                />
                                <CareerStep
                                    text={it.L('If we decide to extend an offer, we\'ll conduct background and reference checks.')}
                                    circle_no='5'
                                />
                                <CareerStep
                                    text={it.L('Congratulations! We\'ll make you a fair and competitive offer, and we don\'t make you negotiate in order to eliminate salary inequities and stress.')}
                                    circle_no='6'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer-email secondary-bg-color'>
                <div className='container'>
                    <p>{it.L('To apply, please submit your CV and a cover letter to [_1]','<a href="mailto:hr@binary.com" rel="nofollow">hr@binary.com.</a>')}</p>
                </div>
            </div>
        </div>
    );
};

export default Careers;
