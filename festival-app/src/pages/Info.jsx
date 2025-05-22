import { useLanguage } from "../App";
import t from "../pages/translation/InfoTranslation";
export default function Info() {
  const { lang } = useLanguage();

  return (
    <div
      id="faq"
      className="w-full flex flex-col justify-center items-center bg-gradient-to-b dark:bg-none from-[#eaf6fb] to-[#f7fafc] dark:bg-black dark:text-white"
    >
      <div className="max-w-screen-xl w-full px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-[#247BA0] font-bold mt-12 mb-8 dark:text-white">
            {t.faq[lang]}
          </h2>
        </div>
        <div className="grid divide-y max-w-3xl mx-auto">
          {/* General & Contact */}
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>{t.general[lang]}</span>
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
                {t.generalText[lang]}
              </p>
            </details>
          </div>
          {/* Accessibility */}
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>{t.access[lang]}</span>
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
                {t.bike[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.bikeText[lang]}
              </p>
              <p className="text-gray-600 mt-3 underline font-bold group-open:animate-fadeIn dark:text-white">
                {t.car[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.carText[lang]}
              </p>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                {t.ov[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.ovText[lang]}
              </p>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                {t.shuttle[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.shuttleText[lang]}
              </p>
              <p className="text-gray-600 mt-3 font-bold underline group-open:animate-fadeIn dark:text-white">
                {t.taxi[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.taxiText[lang]}
              </p>
            </details>
          </div>
          {/* Lockers */}
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>{t.lockers[lang]}</span>
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
                {t.lockersText1[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.lockersText2[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.lockersText3[lang]}
              </p>
            </details>
          </div>
          {/* Medication */}
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>{t.medicine[lang]}</span>
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
                {t.medicineText1[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.medicineText2[lang]}
              </p>
            </details>
          </div>
          {/* Leaving the festival grounds */}
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium text-gray-800 cursor-pointer dark:text-white">
                <span>{t.leaveTitle[lang]}</span>
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
                {t.leaveText1[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.leaveText2[lang]}
              </p>
              <p className="text-gray-600 mt-3 group-open:animate-fadeIn dark:text-white">
                {t.leaveText3[lang]}
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
