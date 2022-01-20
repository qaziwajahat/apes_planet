import "./Artist.css";
import team1 from "../../images/card1.png";
import team2 from "../../images/card2.png";
import team3 from "../../images/card3.png";
import team4 from "../../images/card4.png";
import team5 from "../../images/card5.png";
import team6 from "../../images/card6.png";

function Team() {
  return (
    <>
      <div id="Team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 team-para">
              <h1 className=" head text-white pt-5 pb-5">TEAM</h1>
              <p>
                A couple avid NFT collectors created Unidentified Predators. Kee
                has been in the game since early 2020, and Mona since late 2020.
                Our goal is to create 8,888 insanely dope avatars on the
                Ethereum blockchain, build a colossal project, and grow
                alongside our community.
              </p>
            </div>
          </div>
        </div>

        <div className="container px-4">
          <div className="row gx-5">
            <div className="col-md-4 col-team">
              <div className="border-class">
                <img className="image-team" src={team6} alt="" />
                <h2>@proJPEG</h2>
                <h3>Founder</h3>
                <a href="https://twitter.com/proJPEG" className="links-twitter">
                  <i className="bi-twitter mx-2"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-team">
              <div className="border-class">
                <img className="image-team" src={team1} alt="" />
                <h2>@dilluhn</h2>
                <h3>Project & Marketing Manager</h3>
                <a href="https://twitter.com/Dilluhn" className="links-twitter">
                  <i className="bi-twitter mx-2"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-team">
              <div className="border-class">
                <img className="image-team" src={team2} alt="" />
                <h2>@khoshy</h2>
                <h3>Promotions Manager</h3>
                <a href="https://twitter.com/khoshy" className="links-twitter">
                  <i className="bi-twitter mx-2"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-md-4 col-team">
              <div className="border-class">
                <img className="image-team" src={team3} alt="" />
                <h2>Influencer</h2>
                <h3>Influencers on Board</h3>
                <a
                  href="https://twitter.com/CryptoVonDoom"
                  className="links-twitter"
                >
                  <i className="bi-twitter mx-2"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-team">
              <div className="border-class">
                <div class="hidden_intro">
                  <p>
                    In a magical world where apes rule the metaverse, a flashing
                    blue light streaked the skies of Ape City. After several
                    days of “blue light” sightings, something was feeling odd.
                    Suddenly one bright summer evening, they struck! 5,000
                    diamond handed apes flooded the streets and terrorized the
                    city. In just 3 days it was no longer Ape City. This is
                    Diamond City now!
                  </p>
                  <a
                    href="https://starloopstudios.com/company/"
                    className="links-twitter"
                  >
                    <i className="bi-globe mx-2"></i>
                  </a>
                </div>
                <img className="image-team" src={team4} alt="" />
                <h2>Starloop Studios</h2>
                <h3> Game Developer</h3>
                <a
                  href="https://starloopstudios.com/company/"
                  className="links-twitter"
                >
                  <i className="bi-globe mx-2"></i>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-team">
              <div className="border-class">
                <div class="hidden_intro">
                  <p>
                    I represent a team of ambitious technology professionals
                    with over 5 years of Web development experience specialized
                    in Blockchain frameworks like Etherium, Solana. We believe
                    that the only way to achieve outstanding results is to do
                    the right things with the right people.
                  </p>
                  <a href="https://usamaworks.com" className="links-twitter">
                    <i className="bi-globe mx-2"></i>
                  </a>
                </div>
                <img className="image-team" src={team5} alt="" />
                <h2>Usama Asif</h2>
                <h3> Blockchain Developer</h3>
                <a href="https://usamaworks.com" className="links-twitter">
                  <i className="bi-globe mx-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
