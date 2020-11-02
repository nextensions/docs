/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + "/siteConfig.js");

function imgUrl(img) {
  return siteConfig.baseUrl + "img/" + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + "docs/" + (language ? language + "/" : "") + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + "/" : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || "";
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('mascot/help.png')} />
        <div className='inner'>
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('manual.html', language)}>คู่มือ</Button>
            <Button href={docUrl('system-overview.html', language)}>คุณสมบัติของระบบ</Button>
            <Button href={docUrl('faq.html', language)}>คำถามที่ถามบ่อย</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={["bottom", "top"]}
    id={props.id}
    background={props.background}
  >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content:
          "ติดตั้งได้ทุกที่ ออนไลน์ 24 ชั่วโมง<br />ผลิตเครื่องเองรายเดียวในตลาด<br />ไม่ใช้เน็ตโรงเรียน แบตสำรอง 3 วัน",
        image: imgUrl("terminal-180x180.png"),
        imageAlign: "top",
        title: "บันทึกเวลา",
        imageLink: siteConfig.baseUrl + "docs/clockin.html"
      },
      {
        content:
          "ผ่านเครื่องสแกนบัตรเคลื่อนที่<br />ดูปพ. 5 ออนไลน์ แค่แตะก็เช็คชื่อ<br />ไม่ต้องค้นหา ไม่ต้องขานชื่อ",
        image: imgUrl("sic-180x180.png"),
        imageAlign: "top",
        title: "เช็คชื่อรายวิชา",
        imageLink: siteConfig.baseUrl + "docs/scaninclass.html"
      },
      {
        content:
          "สร้างรายได้ให้สถานศึกษา<br />รู้ยอดขาย Realtime<br />ดูประวัติการใช้จ่ายออนไลน์<br />",
        image: imgUrl("fc-180x180.png"),
        imageAlign: "top",
        title: "ศูนย์อาหาร",
        imageLink: siteConfig.baseUrl + "docs/foodcourt.html"
      },
      {
        content:
          "ครอบคลุมทุกกิจกรรม<br />รับสมัครนักเรียน ห้องสมุด<br />แจ้งเกรดรายวิชา จัดตารางสอน",
        image: imgUrl("system-180x180.png"),
        imageAlign: "top",
        title: "ระบบพื้นฐาน",
        imageLink: siteConfig.baseUrl + "docs/announce.html"
      }
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{ textAlign: "center" }}
  >
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: "Talk about learning how to use this",
        image: imgUrl("nextschool.svg"),
        imageAlign: "right",
        title: "Learn How"
      }
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: "Talk about trying this out",
        image: "https://scdn.line-apps.com/n/line_add_friends/btn/en.png",
        imageAlign: "left",
        title: "Try it Out"
      }
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: "เราดูแลแบบเข้าถึง ด้วยทีมงานบริการลูกค้ามืออาชีพ",
        image: "http://qr-official.line.me/L/oW3mulHHEg.png",
        imageAlign: "right",
        title: "Description",
        url: "https://line.me/R/ti/p/%40bnh5161k"
      }
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
          <br />
          {user.caption}
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"มีใครใช้บ้าง?"}</h2>
      <p>ลูกค้าปัจจุบัน ที่ใช้งาน NextSchool อย่างมีความสุข</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    let language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          {/*<FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;
