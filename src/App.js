import "./App.css";
import React from "react";
import Slideshow1 from "./components/Slideshow1.js";
import Slideshow3 from "./components/Slideshow3.js";
import Dashboard from "./components/Dashboard.js";
import InfoTitle from "./components/InfoTitle";
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

const images = [
  require("./images/IMG_1310.JPG"),
  require("./images/IMG_1313.JPG"),
  require("./images/IMG_1316.JPG"),
  require("./images/IMG_1319.JPG"),
  require("./images/IMG_1320.JPG"),
];

function App() {
  return (
    <div>
      <span id="HOME"></span>
      <Dashboard />
      <Slideshow1 images={images} />
      <span id="ABOUT US"></span>
      <InfoTitle black="WHO WE" green="ARE" />
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
      <div className="pb-3" style={{ backgroundColor: "#FAFAFA" }}>
        <InfoTitle black="Our core" green="Competencies" />
        <CardImageDiv />
      </div>
      <InfoTitle black="Our Defining" green="Strengths" />
      <CardIconDiv />
      <span id="SERVICES"></span>
      <InfoTitle black="Our" green="Services" />
      <span id="NATIVE-NURSERY"></span>
      <SubInfoTitle>Dedicated Non-Retail Native Nursery</SubInfoTitle>
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <BarCard height={"short"}>
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/bambotree.png")}
          >
            threatened species as determined by the international Union for
            Conservation of Nature(IUCN), have priority
          </IconInfo>
        </BarCard>
        <BarCard height={"short"}>
          <IconInfo
            weight={"normal"}
            icon={require("./images/icons/green/pinetree.png")}
          >
            Mature seedlings are either grown on site in our species-rich forest
            or will be utilized in regeneration and LuTreeCo driven community
            planting efforts
          </IconInfo>
        </BarCard>
        <div className=" bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="300px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="NATIVE-FOREST"></span>
      <SubInfoTitle>Species-Rich Native Forest</SubInfoTitle>
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <BarCard height={"tall"} title={"Planting for Resilience"}>
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
        <BarCard height={"tall"} title={"Planting for Resilience"}>
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
        <div className=" bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="200px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="APIARY"></span>
      <SubInfoTitle>The Apiary</SubInfoTitle>
      <BackgroundImage image={require("./images/IMG_1313.JPG")}>
        <div>
          <p className="text-white ms-lg-5 ps-lg-4 paragraph">
            LuTreeCo recognizes the role of bees as a keystone species critical
            to the maintenance of a thriving forest ecosystem. An abundant and
            diverse population of bees is critical to the health of a forest. We
            manufacture Langstroth hives for honey bees and create appropriate
            nesting and foraging habitat for other wild bee species. The revenue
            generated from LuTreeCo's apiary is invested into our conservation
            activities.
          </p>
        </div>
        <div className="bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="400px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="COMMUNITY"></span>
      <InfoTitle green="Community" />
      <BackgroundImage>
        <div>
          <h2 className=" text-light mb-4" style={{ fontWeight: "lighter" }}>
            Community young tree maintenance program (CYTMP)
          </h2>
          <p
            className="text-light paragraph2"
            style={{ fontWeight: "lighter" }}
          >
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
        <div className=" bg-slideshow">
          <div className=" d-none d-lg-block mt-4">
            <Slideshow3 images={images} />
          </div>
          <div className=" d-lg-none mt-4">
            <Slideshow1 display="d-none" height="200px" images={images} />
          </div>
        </div>
      </BackgroundImage>
      <span id="PUBLIC ADVOCACY"></span>
      <InfoTitle black="Public Advocacy" green="& Conservation Leadership" />
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
      <InfoTitle green="Research" />
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
      <InfoTitle black="Contact" green="Us" />
      <div className="row">
        <ContactInfo title={"Contact Information"}>
          <IconTitledInfo
            title={"location"}
            icon={require("./images/icons/contact/contact.png")}
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
            icon={require("./images/icons/contact/contact.png")}
          >
            +256758841256
          </IconTitledInfo>
          <IconTitledInfo
            title={"email"}
            icon={require("./images/icons/contact/contact.png")}
          >
            lutreeCo@gmail.com
          </IconTitledInfo>
          <IconTitledInfo
            title={"LinkedIn"}
            icon={require("./images/icons/contact/contact.png")}
          >
            LutreeCo
          </IconTitledInfo>
          <IconTitledInfo
            title={"Facebook"}
            icon={require("./images/icons/contact/contact.png")}
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
