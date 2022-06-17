import { format } from 'fecha';
import React from 'react'

export default function Projects() {
    const app = "https://www.youtube.com/watch?v=gcLYaTha-Iw";
    const queen = "https://albertturon1.github.io/queen/";
    const bestseller = "https://albertturon1.github.io/bestseller/";

    return (
        <div className="my-10">
            <h1 className="text-black text-xl my-5">Projekty.</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-10 gap-x-5 sm:gap-x-8">
                <Item technologies='React Native, Postgres, Firebase, Node.js' link={app} image={"https://res.cloudinary.com/dschnp3gj/image/upload/v1654018593/Screenshot_32_w4awuj.png"} title="Aplikacja społecznościowa - Lipiec 2022" active/>
                <Item description='Prosta strona w JavaScript prentująca zespół Queen, które celem było stworzenie formularza z walidacją' technologies='React, Tailwind' link={queen} image={"https://imgur.com/S4p19Ek.jpg"} title="Walidacja formularza w JavaScript"  date={[2022, 6, 16]} />
                {/* <Item description='React, react-query, Tailwind, Axios' link={newsportal} image={"https://imgur.com/fBRE6ne.jpg"} title="Wykorzystanie API Pexels"  date={[2022, 5, 31]} />
                <Item description='Vanilla JS, Sass' link={bestseller} image={"https://imgur.com/JiuBRRs.jpg"} title="Scroll w JavaScript" date={[2018, 10, 22]} remasterDate={[2022, 5, 30]} /> */}
            </div>
        </div>
    )
}

const Item = ({ title, date, remasterDate, description, technologies, image, link, alt, active }) => {
    const finishData = date ? format(new Date(date[0], date[1] - 1, date[2]), 'D MMMM YYYY') : null;
    const remasterDataFormat = remasterDate ? format(new Date(remasterDate[0], remasterDate[1] - 1, remasterDate[2]), 'D MMMM YYYY') : null;

    return (
        <div>
            <a className="" href={link} alt={title}>
                <div className="w-70 bg-slate-600 aspect-video mb-4">
                    <img className="object-cover" src={image} alt={alt} />
                </div>
            </a>
            <p className="text-black text-md">{title}</p>
            {description ? <p className="text-gray-600 text-sm mb-2">{description}</p> : null}
            <p className="text-gray-600 text-sm">Technologie: {technologies}</p>
            {active ? <p className="text-gray-600 text-sm">Data stworzenia: w trakcie</p> : null}
            {date ? <p className="text-gray-600 text-sm">Data stworzenia: {finishData}</p> : null}
            {remasterDate ? <p className="text-gray-600 text-sm">Data poprawki: {remasterDataFormat}</p> : null}
        </div>
    )
}