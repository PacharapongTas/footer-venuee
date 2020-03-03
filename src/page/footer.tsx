import React from 'react'
import styled from 'styled-components'
import { MdPhone, MdEmail } from 'react-icons/md'

import {
	colors,
	fontWeight,
	spaces,
	textNormal,
	media,
	lineHeight,
	textLarge1,
	grid,
} from '../styles/mixins'
// import { SERVICE_OPTIONS, getSupplierPathName } from '../../modules/vendor/constants'
import DefaultLogo from '../../static/images/venuee-logo.png'
// import {
// 	OCCASIONS_OPTIONS,
// 	LOCATIONS_OPTIONS,
// 	COMPANYS_OPTIONS,
// 	LEARNS_OPTIONS,
// } from '../../modules/layout/constants'
// import { VenueEFacebookPage, VenueEInstagram, VenueETwitter } from './socialSharing'

const Container = styled.div`
	border-top: 1px solid ${colors.border};
	color: ${colors.secondary};
	padding: ${spaces.large4} 0;
	${media.md`
		padding: ${spaces.large2} 0;
	`}
	${textLarge1};
	font-weight: ${fontWeight.bold2};
`

const H5 = styled.h5`
	${textLarge1};
	font-weight: ${fontWeight.bold3};
	color: ${colors.primary};
	margin-bottom: ${spaces.large1};
`

const Row = styled.div`
	display: flex;
	flex-wrap: wrap-reverse;
	justify-content: center;
	> :first-child {
		width: 30%;
	}
	> :last-child {
		width: 70%;
	}
	${media.md`
		padding: ${spaces.large3} ${spaces.large1};
		> :first-child {
			width: auto;
		}
		> :last-child {
			width: auto;
		}
	`}
`

const Content = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const VenueELogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: ${colors.secondary};
	font-weight: ${fontWeight.bold1};
	margin-top: -${grid.gutterWidth / 4 + 2}px;
	padding: 0 ${spaces.large1};
	width: 100%;
	> * {
		${textNormal};
		margin-bottom: ${spaces.normal};
	}
	> :last-child {
		padding-bottom: ${spaces.small1};
	}
	${media.sm`
		text-align: center;
	`}
`

const VenueEAddress = styled.div`
	color: ${colors.primary};
	${media.md`
		width: 300px;
	`}
`

const VenueEName = styled.div`
	${textLarge1};
	font-weight: ${fontWeight.bold2};
`

const VenueELogo = styled.img`
	text-align: center;
	display: block;
	${media.sm`
		margin: 0 auto;
	`}
`

const TextCopyright = styled.span`
	color: ${colors.secondary};
`

const ListContainer = styled.ul`
	padding-left: 0;
	list-style: none;
`

const NeedHelpListContainer = styled.ul`
	margin-bottom: ${spaces.large2};
	padding-left: 0;
	list-style: none;
`

const SpacePerItem = styled.li`
	margin-bottom: ${spaces.small1};
	line-height: ${lineHeight.normal};
`

const TextListItem = styled.a`
	${textNormal};
	font-weight: ${fontWeight.bold1};
	color: ${colors.secondary};
	:hover {
		color: ${colors.secondary};
	}
`

const ContactContainer = styled.div`
	margin-top: ${spaces.large2};
`

const VenueETextLink = styled.span`
	${textNormal};
	color: ${colors.blueVenuee3};
`

const IconContent = styled.span`
	margin-right: ${spaces.normal};
`

const TextPhoneNumber = styled.span`
	white-space: nowrap;
`

const SocialLinkContainer = styled.div`
	display: flex;
	padding: 0 ${spaces.large1};
	width: 100%;
	> :not(:last-child) {
		margin-right: ${spaces.small1};
	}
	${media.sm`
		display:flex;
		justify-content: center;
		margin-bottom: ${spaces.large5};
	`}
`

class Footer extends React.PureComponent {
	render() {
		// const { t } = this.props
		const currentYear = new Date().getFullYear()
		return (
			<Container>
				<Row>
					<Content>
						<div className="col-md-12">
							<VenueELogoContainer>
								<VenueELogo
									src={DefaultLogo}
									alt="VenueE-logo"
									title="VenueE-logo"
									height="40"
									width="100"
								/>
								<VenueEAddress>
									<span>
										<VenueEName>{('venuee-address.company-name')}</VenueEName>
										<div>{('venuee-address.info')}</div>
									</span>
								</VenueEAddress>
								<TextCopyright>
									<span>Copyright &copy; {currentYear} &nbsp;</span>
									<TextListItem href="https://www.venuee.co">
										<VenueETextLink>venuee.co</VenueETextLink>
									</TextListItem>
									<div>All right reserved.</div>
								</TextCopyright>
							</VenueELogoContainer>
							{/* <SocialLinkContainer>
								<VenueEFacebookPage />
								<VenueEInstagram />
								<VenueETwitter />
							</SocialLinkContainer> */}
						</div>
					</Content>

					<Content>
						<div className="col-6 col-md">
							<H5>Occasions</H5>
							{/* <ListContainer>
								{OCCASIONS_OPTIONS(t).map((occasion, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={occasion.value}>{occasion.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer> */}
						</div>
						<div className="col-6 col-md">
							<H5>{('suppliers')}</H5>
							{/* <ListContainer>
								{SERVICE_OPTIONS(t).map((supplier, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={`/${getSupplierPathName(supplier.slug)}`}>
											{supplier.label}
										</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer> */}
						</div>
						<div className="col-6 col-md">
							<H5>Locations</H5>
							{/* <ListContainer>
								{LOCATIONS_OPTIONS(t).map((location, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={location.value}>{location.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer> */}
						</div>
						<div className="col-6 col-md">
							<H5>Company</H5>
							{/* <ListContainer>
								{COMPANYS_OPTIONS(t).map((company, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={company.value}>{company.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer> */}
						</div>
						<div className="col-6 col-md">
							<H5>Learn</H5>
							{/* <ListContainer>
								{LEARNS_OPTIONS(t).map((learn, index) => (
									<SpacePerItem key={index}>
										<TextListItem href={learn.value}>{learn.label}</TextListItem>
									</SpacePerItem>
								))}
							</ListContainer> */}
						</div>
						<div className="col-6 col-md">
							<H5>Need help?</H5>
							<NeedHelpListContainer>
								<SpacePerItem>
									<TextListItem href="mailto:event@venuee.co">
										<IconContent>
											<MdEmail size={16} />
										</IconContent>
										&nbsp;event@venuee.co
									</TextListItem>
								</SpacePerItem>
								<SpacePerItem>
									<TextListItem href="tel:0972588563">
										<TextPhoneNumber>
											<IconContent>
												<MdPhone size={16} />
											</IconContent>
											&nbsp;+66 (0)97 258 8563
										</TextPhoneNumber>
									</TextListItem>
								</SpacePerItem>
								<SpacePerItem>
									<TextListItem href="tel:0972858536">
										<TextPhoneNumber>
											<IconContent>
												<MdPhone size={16} />
											</IconContent>
											&nbsp;+66 (0)97 285 8536
										</TextPhoneNumber>
									</TextListItem>
								</SpacePerItem>
								<ContactContainer>
									<SpacePerItem>
										<TextListItem>{('contact-us')}</TextListItem>
									</SpacePerItem>
								</ContactContainer>
							</NeedHelpListContainer>
						</div>
					</Content>
				</Row>
			</Container>
		)
	}
}

export default Footer
