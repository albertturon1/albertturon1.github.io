import React from 'react'

export default function About() {
    return (
        <>
            <h1 className="text-black text-xl my-5">O mnie.</h1>
            <div className="container mx-auto flex flex-col md:flex-row">
                <img src={'https://res.cloudinary.com/dschnp3gj/image/upload/v1647991852/IMG_3708_1_pijx0t.jpg'} className="w-48 object-contain rounded-md mb-5 md:mr-5" />
                <div>
                    <p className="text-black text-sm md:text-md flex leading-7 pr-4 sm:pr-20 lg:pr-[45%] text-justify">
                        Jestem Albert - nonkonformista szukający rozwiązania w najbardziej wymagających sytuacjach. Poszukuję wyzwań, nie boję się ryzyka,
                        odpowiedzialności i podejmowania decyzji. Fascynuję mnie możliwość rozwiązywania problemów ludzi oraz tworzenie produktów,
                        które satysfakcjonują użytkownika. <br/>
                        Studiuje Analizę danych na Politechnice Rzeszowskiej, projektuję UX, tworze makiety UI, programuję w React,
                        React Native oraz operuję na bazach SQL.</p>
                    <div className="h-1" />
                    <p className="text-black text-sm md:text-md flex leading-7 pr-4 sm:pr-20 lg:pr-[45%] text-justify">
                        Jestem kreatywny, ambitny, zaangażowany i staranny, jakość wykonywanej pracy jest dla mnie priorytetem. <br/>
                        Nie ma ludzi idealnych - ryzykuję, zdarza mi się podejmować decyzje pod wpływem emocji i lubię dłużej pospać.
                    </p>
                </div>
            </div>
        </>
    )
}
