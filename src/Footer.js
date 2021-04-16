import React from 'react'
import useClipboard from "react-use-clipboard";
import fblogo from './images/fblogo.png'
import instalogo from './images/instalogo.png'
import emaillogo from './images/emaillogo.png'
import ytlogo from './images/ytlogo.png'

function Footer() {
	const [isCopied, setCopied] = useClipboard("oroveczt@gmail.com", {successDuration: 2000});
	return (
		
			<div className="footer">
		<ul>
			<li>
				<a href="https://www.facebook.com/orovecztamas95" target="_blank">
					<img className="logo" src={fblogo}/>
				</a>
			</li>
			<li>
				<a href="https://www.instagram.com/thomm.design/" target="_blank">
					<img className="logo" src={instalogo}/>
				</a>
			</li>
			<li>
				<span>
					<img onClick={setCopied} className="logo" src={emaillogo} alt="Copy to clickboard"/>
				</span>
			</li>
			<li>
				<a href="#">
					<img  className="ytlogo" src={ytlogo}/>
				</a>
			</li>
		</ul>
		<p className="popup">{isCopied ? "oroveczt@gmail.com Copied to clipboard" : ""}</p>
			</div>
		)
}
export default Footer;