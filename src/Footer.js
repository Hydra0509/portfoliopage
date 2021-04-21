import React from 'react'
import useClipboard from "react-use-clipboard";
import instalogo from './images/instalogo.png'
import emaillogo from './images/emaillogo.png'
import vimeologo from './images/vimeologo.png'

function Footer() {
	const [isCopied, setCopied] = useClipboard("oroveczt@gmail.com", {successDuration: 2000});
	return (
		
			<div className="footer">
				{/*<p className="popup">{isCopied ? "oroveczt@gmail.com Copied to clipboard" : ""}</p>*/}
		<ul>
			<li>
				<a href="https://www.instagram.com/thomm.design/" target="_blank" rel="noreferrer">
					<img className="logo" src={instalogo} alt="Instagram"/>
				</a>
			</li>
			<li>
				<span>
					<img onClick={setCopied} className="logo" src={emaillogo} alt="Copy to clickboard"/>
				</span>
			</li>
			<li>
				<a href="https://vimeo.com/thommdesign" target="_blank" rel="noreferrer">
					<img  className="vimeologo" src={vimeologo} alt="Vimeo"/>
				</a>
			</li>
		</ul>
			</div>
		)
}
export default Footer;