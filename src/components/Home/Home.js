import man_v1 from "../../images/man-v1.png";
import man_v2 from "../../images/man-v2.png";

import text_v1 from "../../images/text-v1.svg";
import "./home.css";
function Home() {
  return (
    <div id="Home">
      <div className="container">
      <div className="row first-sec">
        <div className="col-md-6">
          <img className="img-home-banner" src={man_v2} alt="No pic" />
        </div>
        <div className="col-md-6 pt-5 first-sec-second-col">
          <h1 className=" head text-white pt-5 pb-5">Diamond Hand Apes</h1>
          <a
            href="https://opensea.io/collection/primeapeplanetpap"
            class="btn-banner wow animate__ animate__fadeInUp animated"
            data-wow-duration="1s"
            data-wow-delay="0.5s"
          >
            <span>Buy on OpenSea</span>
          </a>
        </div>
      </div>
      <div className="row pt-5 pb-5">
        <div className="col-md-6 p-5 mx-auto">
          <h2 className="text-white">The Story of The <span className="span-color">Diamond Hand Apes</span></h2>
          <p className="homePara">
            In a magical world where apes rule the metaverse, a flashing blue
            light streaked the skies of Ape City.<br/> After several days of “blue
            light” sightings, something was feeling odd.<br/> Suddenly one bright
            summer evening, they struck! 5,000 diamond handed apes flooded the
            streets and terrorized the city.<br/> In just 3 days it was no longer Ape
            City. This is Diamond City now!
          </p>
        </div>
        <div className="col-md-6">
          <img className="img-home-banner" src={man_v1} alt="No pic" />
        </div>
      </div>

      {/* <div className="section-seperater right "></div>
      <div className="row pt-5 pb-5 justify-content-center">
        <div className="col-md-10 pt-5 mx-auto text-center">
          <h4 className="text-white">
            {" "}
            HOW CAN I <span className="span-color"> JOIN THEM?</span>
          </h4>
          <h5>
            Successful entrepreneurs, celebrities, marketing veterans and
            world-renowned digital artists are now working together to help
            answer that question.
          </h5>
          <h5>At the end of December 2021, all fates will be decided.</h5>
          <h5>
            As that’s the date the Prime Ape Planet sends out its first ever VIP
            invitations.
          </h5>
          <h5>
            And you’d be wise to snatch one for yourself and everyone you care
            about. Because once this collection of 7979 unique NFTs mint?
          </h5>
          <h5>
            But early supporters of the project will be handsomely rewarded.
          </h5>
          <h5>
            As masters of digital art, the art team behind Prime Ape Planet has
            enjoyed success in the “Old World.” Their work has always gained
            mainstream recognition and adaptation.
          </h5>
          <h5>
            They’ve worked on titles such as The Lion King, Godzilla, and
            countless other animations… For industry household names including
            Marvel, Disney, and MGM among others.
          </h5>
          <h5>
            Prime Ape Planet will be the project to plant their flags in the
            Metaverse.
          </h5>
          <h5>
            Much like our offline culture, the NFT space won’t ever be the same
            after their contribution.
          </h5>
          <h5>Join them before it’s too late on Discord:</h5>
          <a
            href="https://discord.com/invite/primeapeplanet"
            className="btn-pap btn-pap-primary"
          >
            <span>join the Discord</span>
          </a>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Home;
