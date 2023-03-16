import "./App.css";
import React from "react";
import Slideshow1 from "./components/Slideshow1.js";
import NurserySlider from "./components/NurserySlider.js";
import ForestSlider from "./components/ForestSlider.js";
import ApiarySlider from "./components/ApiarySlider.js";
import CommunitySlider from "./components/CommunitySlider.js";
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
  // require("./images/Home/crowned hornbill.JPG"),
  require("./images/Home/EMQB6814.JPG"),
  // require("./images/Home/Hadada ibis.JPG"),
  require("./images/Home/IMG_1319.JPG"),
  require("./images/Home/IMG_1323.JPG"),
  require("./images/Home/IMG_1648.JPG"),
  require("./images/Home/IMG_1832.JPG"),
  require("./images/Home/IMG_1949.JPG"),
  require("./images/Home/IMG_2292.JPG"),
  require("./images/Home/IMG_2296.JPG"),
  require("./images/Home/IMG_2908.JPG"),
  require("./images/Home/IMG_8259.PNG"),
  require("./images/Home/IMG_9498.JPG"),
  require("./images/Home/NIPP6156.JPG"),
  require("./images/Home/owl.JPG"),
  // require("./images/Home/Prunus africana.jpeg"),
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
        LuTreeCo is an African for-profit social enterprise that conserves trees
        and shrubs that are native to tropical Africa, with emphasis on
        threatened species. We develop novel value chains that not only emerge
        from, but also support and advance, our conservation goals. We will
        raise the profile of flora biodiversity conservation and restoration in
        tropical Africa.
        <br />
        LuTreeCo is located on an 80 acre site on Bunjakko island, in Uganda,
        approximately 60 miles from Kampala by road. We are 100% solar powered
        and have a permanent water supply. LuTreeCo is a proud member of
        Botanical Gardens Conservation International (BGCI; BGCN# 5390).
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
      <SubInfoTitle>Dedicated Non-Retail Native Nursery</SubInfoTitle>
      <BackgroundImage image={require("./images/Nursery/IMG_1167.JPG")}>
        <BarCard height={"short"} direction="right">
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/bambotree.png")}
          >
            Threatened species as determined by the international Union for
            Conservation of Nature(IUCN), have priority
          </IconInfo>
        </BarCard>
        <BarCard height={"short"} direction="left">
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Mature seedlings are either grown on site in our species-rich forest
            or will be utilized in regeneration and LuTreeCo driven community
            planting efforts
          </IconInfo>
        </BarCard>
        <div className="mt-3">
          <NurserySlider id="nurserySlider" />
        </div>
      </BackgroundImage>
      <span id="NATIVE-FOREST"></span>
      <SubInfoTitle>Species-Rich Native Forest</SubInfoTitle>
      <BackgroundImage image={require("./images/Forest/IAQH3403.JPG")}>
        <BarCard
          height={"tall"}
          direction="right"
          title={"Planting for Resilience"}
        >
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/circleleaf.png")}
          >
            15 aces, will grow to 70
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
            Threatened: 5 copies per provenance; 3 to 5 provenances.
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Least concern: 5 copies per species
          </IconInfo>
          <IconInfo
            weight={"light"}
            icon={require("./images/icons/green/leaf.png")}
          >
            Meticulous provenance records.
          </IconInfo>
        </BarCard>
        <div className="mt-3">
          <ForestSlider id="forestSlider" />
        </div>
      </BackgroundImage>
      <span id="APIARY"></span>
      <SubInfoTitle>The Apiary</SubInfoTitle>
      <BackgroundImage image={require("./images/apiary/IMG_8256.PNG")}>
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
          <ApiarySlider id="apiarySlider" />
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
          <CommunitySlider id="communitySlider" />
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
            Bunjakko island, in Uganda, approximately 60 miles from Kampala by
            road.
          </IconTitledInfo>
          <IconTitledInfo
            title={"phone number"}
            icon={require("./images/icons/contact/contact.png")}
          >
            +256758841256
          </IconTitledInfo>
          <IconTitledInfo
            title={"whatsapp number"}
            icon={require("./images/icons/contact/whatsapp.png")}
          >
            +256758841256
          </IconTitledInfo>
          <IconTitledInfo
            title={"email"}
            icon={require("./images/icons/contact/email.png")}
          >
            lutreeCo@gmail.com
          </IconTitledInfo>
          <IconTitledInfo
            title={"LinkedIn"}
            icon={require("./images/icons/contact/linkedin.png")}
          >
            LutreeCo
          </IconTitledInfo>
          <IconTitledInfo
            title={"Facebook"}
            icon={require("./images/icons/contact/facebook.png")}
          >
            LuTreeCo
          </IconTitledInfo>
        </ContactInfo>
        <ContactForm title={"Send us a Message"} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
