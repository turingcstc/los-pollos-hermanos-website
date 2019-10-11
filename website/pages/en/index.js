/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
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

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        {/* <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} /> */}
        <Logo img_src={`${baseUrl}img/Los-Pollos-Hermanos_logo.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href="#about-project">关于项目</Button>
            <Button href="#about-turingcstc">关于 Turing CSTC</Button>
            {/* <Button href={docUrl('doc1.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
    
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>社会责任</h2>
        <MarkdownBlock>进入中国以来，Los Pollos Hermanos 始终致力于回馈社会，对于中国社会的发展做出自己的一份贡献，在地方和全国范围内开展企业社会责任项目。自2019年起，Los Pollos Hermanos 中国的伙伴和志愿者们一共贡献了超过 10 万小时的社区服务，增进了与社区和顾客的情感联系。</MarkdownBlock>
      </div>
  
    
    );

    const TryOut = () => (
      <Block id="about-turingcstc">
        {[
          {
            content:
              'TuringCSTC(Turing Computer Science and Technology Community) 图灵学社，是一个自由的开发者社区。欢迎您的加入。',
              // 'To make your landing page more attractive, use illustrations! Check out ' +
              // '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              // 'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: '关于 TuringCSTC',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light" id="about-project">
        {[
          {
            content:
              '我们为 Los Pollos Hermanos 提供全方面的软件开发，以帮助企业更好的为消费者服务。为此我们创建了这个站点。',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: '关于项目',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Los Pollos Hermanos 是一家快餐连锁店，专门经营炸鸡。由 Gustavo Fring 和 Max Arciniega 创立。'
                   + 'Los Pollos Hermanos 是 Madrigal Electromotive 的子公司，Madrigal Electromotive 是一家庞大的、多元化的集团企业，业务范围主要包括工业设备，制造业，全球航运，建筑业和酒店业。',
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: '关于我们',
          },
          {
            content: 'Los Pollos Hermanos 于2019年1月，在北京中国国际贸易中心开设中国内地第一家门店。对我们来说，中国目前已成为发展速度最快、最大的海外市场。',
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: '走入中国',
          },
        ]}
      </Block>
      
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
