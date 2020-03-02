import React from 'react'
import getConfig from 'next/config'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { isMobile } from 'react-device-detect'
import LineIcon from '../static/icons/line-icon.png'
import LineQR from '../static/images/venuee-line-qr.png'
import { colors } from '../styles/mixins'

const { publicRuntimeConfig } = getConfig()
const { lineQRCodeUrl } = publicRuntimeConfig

const LineColor = colors.greenLine

const ButtonRender = () => {
	return (
		<Button
			className="px-2 p-0 text-white"
			color="muted"
			style={{
				backgroundColor: LineColor,
			}}
		>
			<img src={LineIcon} alt="Line-icon" height={40} className="mr-1 my-0" title="Line-icon" />
			<span className="mr-2">
				<b>@venuee</b>
			</span>
		</Button>
	)
}

export class LineButton extends React.PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			modal: false,
		}
	}

	toggle = () => {
		if (isMobile) {
			window.location.href = lineQRCodeUrl
		} else {
			this.setState(prevState => ({
				modal: !prevState.modal,
			}))
		}
	}

	render() {
		return (
			<div className="mb-2">
				<div onClick={() => this.toggle()}>{this.props.children || <ButtonRender />}</div>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggle}
					className={this.props.className}
					contentClassName="border-0"
				>
					<ModalHeader
						toggle={this.toggle}
						cssModule={{ 'modal-title': 'w-100 text-center font-weight-light' }}
					>
						<span style={{ marginLeft: 40 }}>Scan QR Code For Contact Us</span>
					</ModalHeader>
					<ModalBody>
						<div className="d-flex justify-content-center">
							<img className="mb-0" src={LineQR} alt="Line-QR" />
						</div>
						<p className="m-0 text-center" style={{ color: 'rgba(0,0,0,0.5)' }}>
							Line: @venuee
						</p>
					</ModalBody>
					<a href="line://ti/p/@venuee">
						<ModalFooter
							className="justify-content-center font-weight-light text-white"
							style={{
								backgroundColor: LineColor,
							}}
						>
							Open with Line
						</ModalFooter>
					</a>
				</Modal>
			</div>
		)
	}
}