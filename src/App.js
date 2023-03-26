import "./App.css";
import React from "react";
import Slideshow1 from "./components/Slideshow1.js";
import Slideshow3 from "./components/Slideshow3.js";
import Dashboard from "./components/Dashboard.js";
import InfoTitle from "./components/InfoTitle";
import Space from "./components/Space";
import ParagraphInfo from "./components/ParagraphInfo";
import CardImageDiv from "./components/CardImageDiv";
import CardIconDiv from "./components/CardIconDiv";
import SubInfoTitle from "./components/SubInfoTitle";
import BackgroundImage from "./components/BackgroundImage";
import IconInfo from "./components/IconInfo";
import BarCard from "./components/BarCard";
import IconTitledInfo from "./components/IconTitledInfo";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const homeImages = [
  require("./images/Home/IMG_2734.JPG"),
  require("./images/Home/IMG_3290.JPG"),
  require("./images/Home/IMG_7312.JPG"),
];

const forestImages = [
  require("./images/Forest/forest1.jpg"),
  require("./images/Forest/forest2.jpg"),
  require("./images/Forest/forest3.jpg"),
  require("./images/Forest/forest4.jpg"),
  require("./images/Forest/BielschmediaUgandesnis.JPG"),
  require("./images/Forest/bielscmeidia.JPG"),
  require("./images/Forest/fruit.JPG"),
  require("./images/Forest/IMG_1507.JPG"),
  require("./images/Forest/IMG_1574.JPG"),
  require("./images/Forest/IMG_1584.JPG"),
  require("./images/Forest/IMG_1416.JPG"),
  require("./images/Forest/IMG_1426.JPG"),
  require("./images/Forest/IMG_1506.JPG"),
];

const nurseryImages = [
  require("./images/Nursery/IMG_1169.JPG"),
  require("./images/Nursery/IMG_1170.JPG"),
  require("./images/Nursery/IMG_1172.JPG"),
  require("./images/Nursery/IMG_1173.JPG"),
  require("./images/Nursery/IMG_1177.JPG"),
  require("./images/Nursery/IMG_1178.JPG"),
  require("./images/Nursery/IMG_1180.JPG"),
  require("./images/Nursery/IMG_1283.JPG"),
  require("./images/Nursery/IMG_1359.JPG"),
];

const apiaryImages = [
  require("./images/apiary/IMG_1258.JPG"),
  require("./images/apiary/IMG_1354.JPG"),
  require("./images/apiary/IMG_1305.JPG"),
  require("./images/apiary/IMG_3288.JPG"),
  require("./images/apiary/IMG_1313.JPG"),
  require("./images/apiary/IMG_1315.JPG"),
  require("./images/apiary/IMG_1319.JPG"),
  require("./images/apiary/IMG_1324.JPG"),
  require("./images/apiary/IMG_1529.JPG"),
];

const communityImages = [
  require("./images/community/IMG_1157.JPG"),
  require("./images/community/IMG_1158.JPG"),
  require("./images/community/IMG_1159.JPG"),
  require("./images/community/IMG_1160.JPG"),
  require("./images/community/IMG_1163.JPG"),
  require("./images/community/IMG_1166.JPG"),
  require("./images/community/IMG_9493.JPG"),
  require("./images/community/LocalCommunityInvolvement.JPG"),
  require("./images/community/IMG_3007.JPG"),
];

function App() {
  return (
    <div>
      <Dashboard />
      <span id="HOME"></span>
      <Slideshow1 images={homeImages} id="topSlider" />
      <span id="ABOUT US"></span>
      <InfoTitle black="WHO WE" green="ARE" margin="15px" />
      <ParagraphInfo>
        Lukango Tree Conservancy Limited (LuTreeCo) is an African social
        enterprise that conserves trees and shrubs that are native to tropical
        Africa, with emphasis on threatened species. We develop novel value
        chains that not only emerge from, but also support and advance, our
        conservation goals. We will raise the profile of flora biodiversity
        conservation and restoration in tropical Africa.
        <br />
        LuTreeCo is located on Bunjako island, in Uganda, approximately 60 miles
        from Kampala by road. We are 100% solar powered and have a permanent
        water supply. LuTreeCo is a proud member of Botanical Gardens
        Conservation International (BGCI; BGCN# 5390).
      </ParagraphInfo>
      <Space height="25px" />
      <div
        className="pb-3"
        style={{ backgroundColor: "#FAFAFA", paddingTop: "15px" }}
      >
        <InfoTitle black="Our core" green="Competencies" margin="0px" />
        <CardImageDiv />
      </div>
      <Space height="25px" />
      <InfoTitle black="Our Defining" green="Strengths" />
      <Space height="5px" />
      <CardIconDiv />
      <Space height="25px" />
      <span id="SERVICES"></span>
      <InfoTitle black="Our" green="Services" />
      <span id="NATIVE-NURSERY"></span>
      <SubInfoTitle>A dedicated Non-Retail Native Nursery.</SubInfoTitle>
      <BackgroundImage image={require("./images/Home/IMG_7312.JPG")}>
        <BarCard height={"short"} direction="right">
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/bambotree.png")}
          >
            Threatened species as determined by the international Union for
            Conservation of Nature (IUCN), have priority.
          </IconInfo>
        </BarCard>
        <BarCard height={"short"} direction="left">
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Mature seedlings are planted either on site in our species-rich
            forest of future mother trees or are utilized in LuTreeCo driven
            community planting efforts.
          </IconInfo>
        </BarCard>
        <div className="mt-3">
          <Slideshow3 id="nurserySlider" images={nurseryImages} />
        </div>
      </BackgroundImage>
      <span id="NATIVE-FOREST"></span>
      <SubInfoTitle>
        A species rich native forest of future mother trees.
      </SubInfoTitle>
      <BackgroundImage image={require("./images/Home/IMG_2734.JPG")}>
        <BarCard
          height={"tall"}
          direction="right"
          title={"Planting for Resilience"}
        >
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/circleleaf.png")}
          >
            15 aces, will grow to 70.
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/treegroup.png")}
          >
            Some legacy non native trees present.
          </IconInfo>
        </BarCard>
        <BarCard
          height={"tall"}
          direction="left"
          title={"Planting for Resilience"}
        >
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/bambotree.png")}
          >
            Threatened: 5 trees per provenance; 3 to 5 provenances.
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Least concern: 5 trees per species.
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/leaf.png")}
          >
            Meticulous provenance records.
          </IconInfo>
        </BarCard>
        <div className="mt-3">
          <Slideshow3 id="forestSlider" images={forestImages} />
        </div>
      </BackgroundImage>
      <span id="APIARY"></span>
      <SubInfoTitle>The Apiary</SubInfoTitle>
      <BackgroundImage image={require("./images/Home/IMG_3290.JPG")}>
        <div>
          <p className="ms-3 ms-lg-5 ps-lg-4 paragraph">
            LuTreeCo recognizes the crucial role of bees as a keystone species
            in maintaining a thriving forest ecosystem. The abundance and
            diversity of bee species are critical factors in the health of the
            forest. To support this, the organization manufactures Langstroth
            hives and traps its own bees. The revenue generated from the apiary
            will help further its conservation goals and contribute to the
            overall health of the forest.
          </p>
        </div>
        <div className="mt-2">
          <Slideshow3 id="apiarySlider" images={apiaryImages} />
        </div>
      </BackgroundImage>
      <Space height="25px" />
      <span id="COMMUNITY"></span>
      <InfoTitle green="Community" />
      <Space height="10px" />
      <BackgroundImage image={require("./images/community/IMG_1157.JPG")}>
        <div>
          <h3
            className=" text-light mb-4 mx-3"
            style={{ fontWeight: "lighter" }}
          >
            Community young tree maintenance program (CYTMP)
          </h3>
          <p className="ms-3 ms-lg-5 ps-lg-4 paragraph">
            The CYTMP is a partnership between LuTreeCo and local subsistence
            farmers that promotes sustainable conservation. As part of the
            program, farmers cultivate food crops for their families within
            LuTreeCo's young forest at no cost to them. In return, they
            participate in the care and maintenance of the young trees. This not
            only reduces the costs associated with weeding but also strengthens
            the farmers' involvement in conservation efforts. As trees grow,
            crop growing becomes untenable and CYTMP activities relocate to
            newly planted sites within the forest. LuTreeCo's CYTMP Biannual
            meetings serve as an educational platform, promoting the principles
            of conservation among the farmers. This collaboration is an
            innovative and effective tool for sustainable development.
          </p>
        </div>
        <div className="mt-2">
          <Slideshow3 id="communitySlider" images={communityImages} />
        </div>
      </BackgroundImage>

      <span id="PUBLIC ADVOCACY"></span>
      <Space height="25px" />
      <InfoTitle black="Public Advocacy" green="& Conservation Leadership" />
      <Space height="10px" />
      <ParagraphInfo>
        LuTreeCo frequently publishes detailed tree and shrub related
        conservation information on its Linkedin and Facebook platforms in order
        to increase conservation awareness. These publications include summaries
        on uncommon native tree species, detailing their utility and importance,
        and are aimed at promoting planting of these species. Additionally,
        LuTreeCo founded and manages the Indigenous Tree and Shrub Species of
        Uganda Facebook page for the same goal of educating the public and
        promoting conservation.
        <br />
        LuTreeCo strongly advocates for indigenous tree planting and bee farming
        within it's works local communities, through CYTMP and local leadership.
        Furthermore, we are ccommitted to engaging international organisations
        in research and restoration initiatives through out the region.
      </ParagraphInfo>
      <span id="RESEARCH"></span>
      <Space height="20px" />
      <InfoTitle green="Research" />
      <Space height="10px" />
      <ParagraphInfo>
        LuTreeCo is dedicated to advancing the understanding of native tree and
        shrub species through research. We actively test, develop and optimise
        propagation protocols and will share our findings to the public in
        open-source journals. As part of our ongoing research, we conduct annual
        ecosystem surveys in order to track the impact of our activities on the
        plants, insects, mammals and reptiles around us. Looking ahead, we will
        expand our research activities into non-destructive product development
        projects, as well as offer internship, graduate and undergraduate
        research opportunities on site.
      </ParagraphInfo>
      <span id="CONTACT US"></span>
      <Space height="15px" />
      <InfoTitle black="Contact" green="Us" />
      <Space height="10px" />
      <div className="row">
        <ContactInfo title={"Contact Information"}>
          <IconTitledInfo
            title={"location"}
            icon={require("./images/icons/contact/map.png")}
          >
            Ssenyendo, Bunjako Island, Buwama, Mpigi.
          </IconTitledInfo>
          <IconTitledInfo
            title={"phone number"}
            icon={require("./images/icons/contact/contact.png")}
          >
            +256 702979791
          </IconTitledInfo>
          <IconTitledInfo
            title={"whatsapp number"}
            icon={require("./images/icons/contact/whatsapp.png")}
          >
            +15157450092
          </IconTitledInfo>
          <IconTitledInfo
            title={"email"}
            icon={require("./images/icons/contact/email.png")}
          >
            <h6 className="email">lukangotreeconservancy@gmail.com</h6>
          </IconTitledInfo>
          <IconTitledInfo
            title={"LinkedIn"}
            icon={require("./images/icons/contact/linkedin.png")}
          >
            <a
              className="about_link"
              target="_blank"
              href="https://www.linkedin.com/company/lukango-tree-conservancy-lutreeco/"
            >
              lukango-tree-conservancy-lutreeco
            </a>
          </IconTitledInfo>
          <IconTitledInfo
            title={"Facebook"}
            icon={require("./images/icons/contact/facebook.png")}
          >
            <a
              className="about_link"
              target="_blank"
              href="https://www.facebook.com/LuTreeCo"
            >
              LutreeCo
            </a>
          </IconTitledInfo>
        </ContactInfo>
        <ContactForm title={"Send us a Message"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
