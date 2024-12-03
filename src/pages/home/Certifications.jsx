import data from "../../data/index.json";

export default function Certifications() {
  return (
    <section className="portfolio--section" id="Certifications">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h1 className="section--heading">Certifications</h1>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.certifications?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <br />
                <p className="text-md">{item.description}</p>
              </div>
              <a
                href={item.link_open}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm portfolio--link"
              >
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}