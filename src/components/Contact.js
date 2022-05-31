import React from 'react'
import githubLogo from '../assets/icons/githubLogo.png'
import linkedinLogo from '../assets/icons/linkedinLogo.png'
import gmailLogo from '../assets/icons/gmailLogo.png'
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import toast from "react-hot-toast";

export default function Contact() {
    return (
        <div className="my-10">
            <h1 className="text-black text-xl my-5">Kontakt.</h1>
            <div className="container mx-auto flex flex-wrap items-center">
                <Item title='GitHub' icon={githubLogo} link="https://github.com/albertturon1" />
                <Item title='LinkedIn' icon={linkedinLogo} link="https://www.linkedin.com/in/albert-turo%C5%84-2208aa221/" />
                <Item title='Gmail' icon={gmailLogo} link="albertturon23@gmail.com" doCopy />
            </div>
        </div>
    )
}

const Item = ({ title, icon, link, doCopy }) => {
    const [value, copy] = useCopyToClipboard();

    const copyTo = () => {

        if (doCopy) {
            copy(link);
            notify(`Skopiowano adres email do schowka \n ${link}`);
        }
        else return null;
    }

    return (
        <a className="flex flex-row border-2 border-indigo-300 px-4 py-2 rounded-xl mr-3 mb-3 hover:bg-slate-200" href={doCopy ? null : link} onClick={copyTo}>
            {icon ? <img className="w-4 mr-2 object-contain" src={icon} alt={icon} /> : null}
            <p className="text-black">{title}</p>
        </a>
    )
}
const notify = (message) => toast.success(message, { duration: 3000});