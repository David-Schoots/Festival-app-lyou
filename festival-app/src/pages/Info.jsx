export default function Info() {
  return (
    <div
      id="faq"
      className="w-full flex flex-col justify-center items-center bg-gradient-to-b dark:bg-none from-[#eaf6fb] to-[#f7fafc] dark:bg-black dark:text-white"
    >
      <div className="max-w-screen-xl w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#247BA0] font-bold mt-12 mb-8 dark:text-white">
            FAQ
          </h2>
        </div>
        <div className="grid divide-y max-w-3xl mx-auto">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>Algemeen & contact</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="dark:text-white"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Locatie: Strijkviertel, Utrecht <br />
                Navigatieadres: Strijkviertelweg, Utrecht,
                <br />
                Zaterdag 6 september 2025 - 12:00 tot 23:00 uur
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>Bereikbaarheid</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="dark:text-white"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                Fiets
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Er is een grote gratis fietsenstalling aanwezig waar je jouw
                fiets de gehele dag kunt stallen.
              </p>
              <p className="text-gray-600 mt-3 underline font-bold group-open:animate-fadeIn dark:text-white">
                Auto
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Je kunt een parkingticket aanschaffen. Parkeren kan op P+R
                Papendorp, volg hiervoor de borden 'P online ticket'. Heb je
                geen ticket van te voren gekocht? Dan kun je bij de
                parkeerwachter op locatie een parkeerticket aanschaffen (PIN
                ONLY). Let wel op: VOL=VOL
              </p>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                OV
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Kom je met het openbaar vervoer naar Lief? Plan dan je trip via{" "}
                <a
                  href="https://9292.nl/"
                  className="text-blue-500 dark:text-blue-300"
                >
                  9292.nl
                </a>
              </p>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                Shuttlebus
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Vanaf Utrecht Centraal kun je onze gratis shuttlebus richting
                het festivalterrein pakken. Je vindt deze bus op het centraal
                station aan de Mineurslaan. Volg de witte bordjes met zwarte
                pijlen én ' ❤️U Festival'. De bus rijdt tussen 12:00 uur & 19:00
                uur richting het festival en vanaf 21:00 uur kun je weer
                instappen om richting het station te gaan.
              </p>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                Taxi + Kiss & Ride
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Navigeer naar Strijkviertel, De Meern (Utrecht). Volg de borden
                "Kiss & Ride ❤️U Festival", zodra je in de buurt bent van het
                festivalterrein.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>Lockers</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="dark:text-white"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Op het festivalterrein zijn kluisjes aanwezig waar je je spullen
                veilig kunt opbergen! Hier passen 3 à 4 jassen in!
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Goed om te weten: je kunt je kluisje gedurende de hele dag
                openen en sluiten zo vaak je wilt.
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Het is <span className="font-bold underline">niet</span>{" "}
                mogelijk om online een kluisje te reserveren. 
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span> Ik gebruik medicatie. Wat nu?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="dark:text-white"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Het is toegestaan om medicijnen mee te nemen in een dosis die je
                maximaal nodig hebt op 1 dag. Een
                doktersverklaring/medicatiepaspoort is noodzakelijk.{" "}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                De beveiliging zal jouw documentatie beoordelen en de medicijnen
                controleren. Het kan zijn dat de EHBO jouw medicijnen
                (bijvoorbeeld als deze gevaarlijk zijn i.c.m. alcohol) in
                bewaring neemt en je deze enkel kan innemen bij de EHBO. 
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span> Mag ik het festivalterrein tussentijds verlaten?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="dark:text-white"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Nee, helaas is dat niet mogelijk. Om de veiligheid van alle
                bezoekers te kunnen waarborgen, kunnen we het niet toestaan dat
                het festivalterrein tussentijds verlaten wordt.
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Wij hebben namelijk geen zicht op hetgeen wat een bezoeker
                buiten het festivalterrein doet en ik welke staat deze het
                terrein weer betreedt. Hier kunnen dan ook geen uitzonderingen
                voor gemaakt worden.
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                Wij hebben genoeg loungeplekken, foodstands & barren om het een
                hele dag uit te kunnen houden.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
