import "./App.css";
import React from "react";
import NewsCard from "./components/NewsCard.js";
import Footer from "./components/Footer";
import NewsBanner from "./components/NewsBanner.js";

const news = [
  {
    id: 13,
    title: "LuTreeCo Secures First Grant from Global Botanic Garden Fund to Enhance Nursery and Arboretum Infrastructure",
    content: `Thrilled to share that LuTreeCo is one of the recepients of a small grant from the Global Botanic Garden Fund (GBGF) of Botanical Gardens Conservation International (BGCI). Grants were awarded to 42 institutions across 26 different countries, representing 38% of applicants. This grant will contribute to the estabishment of a new well irrigation system for the nursery and arboretum ....
    `,
    date: "28 Aug 2024",
    image: require("./images/Nursery/nus4.JPG"),
    link: "https://www.linkedin.com/posts/lukango-tree-conservancy-lutreeco_thrilled-to-share-that-lutreeco-is-one-of-activity-7234517670975389696-zH-9?utm_source=share&utm_medium=member_ios",
  },
  {
    id: 11,
    title: "Extinction of indigenous trees leaves flood-prone areas venerable, environmentalists say",
    content: `The extinction of indigenous trees, cleared for charcoal burning, brick-laying and sand mining has left flood-prone areas vulnerable to devastating effects whenever it rains, environmentalists have said. On Thursday morning, two school-going children died while 28 other residents sustained injuries after a heavy downpour accompanied by strong winds ravaged six villages of Kituntu Sub County in Mpigi District. ...
    `,
    date: "24 Apr 2024",
    image: require("./images/news/news13.png"),
    link: "https://www.monitor.co.ug/uganda/news/national/extinction-of-indigenous-trees-leaves-flood-prone-areas-venerable-environmentalists-say-4602602",
  },
  {
    id: 9,
    title: "Protecting old tree species: Civic organisation looks to conserve trees",
    content: `Mpigi District residents have started a campaign to replant indigenous trees to ensure their continued existence, as many of them have recently been cut, endangering the environment. The call comes days after President Museveni launched a campaign to protect the environment, renewing the call for all encroachers of wetlands and other natural resources to vacate...
    `,
    date: "21 Apr 2024",
    image: require("./images/news/news11.png"),
    link: "https://www.youtube.com/watch?v=atlOv0DUKbI",
  },
  {
    id: 9,
    title: "CONSERVING THE ENVIRONMENT: COMBINED EFFORTS NEEDED TO RESTORE TREES",
    content: `Mpigi District residents have started a campaign to replant indigenous trees to ensure their continued existence, as many of them have recently been cut, endangering the environment. The call comes days after President Museveni launched a campaign to protect the environment, renewing the call for all encroachers of wetlands and other natural resources to vacate...
    `,
    date: "21 Apr 2024",
    image: require("./images/news/news14.png"),
    link: "https://www.youtube.com/watch?v=6aE5koLrQrs",
  },
  {
    id: 10,
    title: "Can Schools Save Indigenous Trees?",
    content: `Uganda has witnessed the spread of exotic trees as Commercial tree planters rush to cash in from species like pine and eucalyptus.
    The demand for indigenous and exotic tree species for timber has seen a rapid decline in Uganda’s tree cover. And now, there is concern that most indigenous tree species could be lost shortly if nothing is done to save them....
    `,
    date: "21 Apr 2024",
    image: require("./images/news/news12.png"),
    link: "https://ugandaradionetwork.net/story/can-schools-save-indigenous-trees-",
  },
  {
    id: 8,
    title: "St George's eco-agents plant trees to help mitigate climate change",
    content: `Last week, St George's eco-agents planted trees in school as part of their partnership with Sports Uganda UK and to honour the 
        efforts carried out by the Lukango Tree Conservancy in Uganda https://lutreeco.com/. Sports Uganda https://www.sportsuganda.org/ aims...
    `,
    date: "24 January 2024",
    image: require("./images/news/news10.jpg"),
    link: "https://www.st-georges.lu/community/news-and-photos/new-stories/~board/eco-news/post/st-georges-eco-agents-plant-trees-to-help-mitigateclimate-change",
  },
  {
    id: 7,
    title: "A short story about little known Rytigynia ruwenzoriensis",
    content: `Rytigynia ruwenzoriensis is a shrub or small tree that is native to Burundi, Rwanda, Democratic Republic of Congo and Uganda.
    R. ruwenzoriensis is classified as vulnerable on IUCN’s red list primarily due to habitat loss from agriculture and human population growth...
    `,
    date: "3 January 2024",
    image: require("./images/news/news9.jpeg"),
    link: "https://www.bgci.org/news-events/a-short-story-about-little-known-rytigynia-ruwenzoriensis/",
  },
  {
    id: 6,
    title: "Sports Uganda Limited UK Moves To Promote Quadball in Uganda",
    content: `Sports Uganda Limited UK has partnered with Quadball Uganda to bolster sports diversity and promote
     conservation efforts in Uganda, solidifying their collaboration through a pivotal Memorandum of Understanding (MoU). The signing ceremony took place at...
    `,
    date: "29 December 2023",
    image: require("./images/news/news8.jpg"),
    link: "https://www.the-sportsnation.com/2023/12/29/sports-uganda-limited-uk-moves-to-promote-quadball-in-uganda/",
  },
  {
    id: 5,
    title: "Quadball: Sports Uganda Limited UK launches interesting sport for The Best Bare Foot League in the World",
    content: `Sports Uganda Limited UK in conjunction with Quadball Uganda have signed a memorandum of understanding on 
        Thursday, December 28, 2023 at the Chic-ka-dees Pre-school in Bukandekande, Kitala, Katabi Town Council, Wakiso district. This momentous event was graced by...
    `,
    date: "28 December 2023",
    image: require("./images/news/news7.jpg"),
    link: "https://kawowo.com/2023/12/28/quadball-sports-uganda-limited-uk-launches-interesting-sport-for-the-best-bare-foot-league-in-the-world/",
  },
  {
    id: 4,
    title: "Donations: Different Uganda hubs receive sporting gear, trees for conservation",
    content: `These hubs included Motion Youth Hub (Kampala), St Andrew’s Lugazi, Pathways Development Initiative (PDI) Bududa and Hope For Next Generation (Mbale).
    Among the sports gear donated were T-shirts, jerseys, shorts, shoes, shin guards, sockings, sneakers and boots, officially...
    `,
    date: "20 October 2023",
    image: require("./images/news/news6.jpg"),
    link: "https://kawowo.com/2023/10/20/donations-different-uganda-hubs-receive-sporting-gear-trees-for-conservation/",
  },
  {
    id: 2,
    title: "Piloting a Scalable Three Year Native Tree Growing Primary School Competition",
    content: `At Lukango Tree Conservancy we conserve tree and shrub species that are native to 
    tropical Africa, with focus on threatened species. We have a seed bank, including freezer capacity, 
    a dedicated nursery, and a young species-rich forest of future mother trees...

    `,
    date: "15 September 2023",
    image: require("./images/news/news5.JPG"),
    link: "https://www.bgci.org/news-events/piloting-a-scalable-three-year-native-tree-growing-primary-school-competition/",
  },
  {
    id: 3,
    title: "Rhino Athletics Club Uganda in collaboration drive to conserve the environment",
    content: `Rhino Athletics Club Uganda in conjunction with Sports for Education Conservation Tourism and Health London, UK
     - Kampala, Uganda SportsUganda Ltd UK and Lukango Tree Conservancy (LuTreeCo) formed a partnership to combat biodiversity loss in Africa...
    `,
    date: "15 September 2023",
    image: require("./images/news/news3.jpg"),
    link: "https://kawowo.com/2023/04/05/rhino-athletics-club-uganda-in-collaboration-drive-to-conserve-the-environment/",
  },
  {
    id: 3,
    title: "Youth emback on the restoration on native tree species in Uganda.",
    content: `Climate YES, a global Ecumenical movement of young activists 
    from around the world is working together for climate Justice in partnership 
    with Lukango Tree Conservancy and Namirembe Diocese Youth leaders to promote the drive...`,
    date: "23 August 2023",
    image: require("./images/news/news4.jpg"),
    link: "https://www.newvision.co.ug/category/news/youth-embark-on-the-restoration-of-native-tre-NV_168276",
  },
  {
    id: 1,
    title: "Utility of the Miyawaki Method in Conservation of Tree Species Native To Tropical Africa.",
    content: `Can the Miyawaki Method Hasten Conservation of African Tree Species
    Whereas our key focus on the conservation of species native to tropical Africa is to grow and 
    establish resilient populations of threatened species...`,
    date: "14 April 2023",
    image: require("./images/news/news1.png"),
    link: "https://www.bgci.org/news-events/utility-of-the-miyawaki-method-in-conservation-of-tree-species-native-to-tropical-africa/",
  },
];


function NewsPage() {
    return (
      <div>
        <NewsBanner image={require("./images/Forest/forest10.JPG")} id="topSlider" />
        <div className="container">
          <div className="row mt-3">
          {news.map((value) => {
              return (
                <NewsCard 
                id={value.id}
                image={value.image}
                title={value.title}
                content={value.content}
                link={value.link}
                date={value.date}
              />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default NewsPage;