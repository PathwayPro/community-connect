import classNames from 'classnames';
import { FC } from 'react';

import Heading from '../../common/components/Heading/Heading';
import useWindowSize, { BREAKPOINTS } from '../../common/utils/useWindowSize';
import SectionMain from '../../components/SectionMain/SectionMain';

import styles from './AboutUs.module.scss';

import ourMission from '../../images/AboutUs/our-mission.png';
import ourStoryImage from '../../images/AboutUs/our-story.png';
import ourVisionImage from '../../images/AboutUs/our-vision.png';

const AboutUs: FC = () => {
  // Using window width size to add Heading on desktop and mobile
  const { width } = useWindowSize();

  return (
    <>
      <SectionMain>
        {width <= BREAKPOINTS.small && (
          <Heading tagType="h1" className={styles.heading}>
            About Us
          </Heading>
        )}
        <div className={styles.inner}>
          <div className={classNames(styles.textBlock, styles.reorder)}>
            {width > BREAKPOINTS.small && (
              <Heading tagType="h1" className={styles.heading}>
                About Us
              </Heading>
            )}
            <Heading tagType="h4" className={styles.subheading}>
              Our Story
            </Heading>
            <p className={styles.text}>
              In&nbsp;2019, Wunmi Adekanmbi took her first curious steps into the vibrant Alberta tech scene, little
              knowing the incredible journey that lay ahead. To&nbsp;her delight, she stumbled upon a&nbsp;thriving and
              innovative community driven by&nbsp;a&nbsp;powerful social contract of&nbsp;giving first. Embraced
              by&nbsp;a&nbsp;strong support system and invaluable industry connections for startups, Calgary was
              on&nbsp;the cusp of&nbsp;transforming its economy, shifting from an&nbsp;oil and gas legacy
              to&nbsp;embrace the boundless potential of&nbsp;the tech industry.
            </p>
            <p className={styles.text}>
              However, amidst the warmth and welcome, Wunmi couldn&rsquo;t ignore a&nbsp;significant issue&nbsp;&mdash;
              the lack of&nbsp;diversity in&nbsp;the Alberta tech community, with only a&nbsp;handful
              of&nbsp;individuals who shared her background. Though she felt embraced, she also recognized that she
              wasn&rsquo;t explicitly invited to&nbsp;the table. Determined to&nbsp;change this narrative, Wunmi knew
              it&nbsp;was time to&nbsp;extend a&nbsp;heartfelt invitation to&nbsp;immigrants and newcomers like herself,
              and&nbsp;so, Immigrant Techies Alberta was born.
            </p>
          </div>
          <div className={classNames(styles.imageBlock, styles.reorder)}>
            <img src={ourStoryImage} alt="our story image" />
          </div>
        </div>
        <p className={styles.text}>
          At&nbsp;Immigrant Techies Alberta, we&nbsp;believe that engaging diverse talent is&nbsp;the key
          to&nbsp;unlocking limitless possibilities. We&nbsp;celebrate the unique perspectives, talents, and experiences
          that every individual brings to&nbsp;the table. By&nbsp;connecting skilled immigrants with opportunities and
          resources, we&nbsp;are not only fostering a&nbsp;space where innovation knows no&nbsp;bounds but also creating
          a&nbsp;powerful talent reservoir that benefits the entire Alberta tech community.
        </p>
        <p className={styles.text}>
          This is&nbsp;why we&nbsp;created the community Connect Platform, an&nbsp;inclusive web-based application
          tailored specifically for the immigrant community in&nbsp;the tech industry. We&nbsp;understand the unique
          challenges and opportunities that immigrants face when pursuing careers in&nbsp;technology. Our platform aims
          to&nbsp;foster a&nbsp;supportive and empowering environment, providing a&nbsp;wealth of&nbsp;resources,
          networking opportunities, and knowledge-sharing to&nbsp;help immigrant tech professionals thrive and succeed
          in&nbsp;their endeavors.
        </p>
      </SectionMain>

      <SectionMain>
        <div className={styles.inner}>
          <div className={styles.imageBlock}>
            <img src={ourVisionImage} alt="our vision image" />
          </div>
          <div className={styles.textBlock}>
            <Heading tagType="h4" className={classNames(styles.subheading, styles.centered)}>
              Our Vision
            </Heading>
            <p className={styles.text}>
              To&nbsp;create a&nbsp;vibrant and cohesive tech community where immigrant professionals can harness their
              diverse backgrounds, skills, and experiences to&nbsp;make meaningful contributions to&nbsp;the technology
              sector. We&nbsp;aspire to&nbsp;be&nbsp;the go-to platform for connecting immigrants in&nbsp;tech,
              facilitating collaborations, and promoting equal opportunities for every member, regardless of&nbsp;their
              cultural background.
            </p>
          </div>
        </div>
      </SectionMain>

      <SectionMain>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <Heading tagType="h4" className={styles.subheading}>
              Our Mission
            </Heading>
            <p className={styles.text}>
              To&nbsp;bridge the gap and cultivate a&nbsp;sense of&nbsp;belonging for immigrant professionals
              in&nbsp;the tech community. Driven by&nbsp;a&nbsp;passion to&nbsp;integrate highly skilled immigrants into
              the Alberta tech space, Wunmi created this community grassroots movement with a&nbsp;dedication
              to&nbsp;holding space for newcomers to&nbsp;thrive in&nbsp;tech careers and startups. To&nbsp;provide
              a&nbsp;high-quality tech talent pool to&nbsp;the Alberta tech and startup ecosystem. We&nbsp;firmly
              believe that by&nbsp;tapping into the vast potential of&nbsp;skilled immigrants, we&nbsp;can enrich the
              local tech landscape and bring fresh perspectives that lead to&nbsp;unparalleled growth and innovation.
            </p>
            <p className={styles.text}>
              Join&nbsp;us on&nbsp;this transformative journey as&nbsp;we&nbsp;shape a&nbsp;brighter, more inclusive
              future for the Alberta tech landscape. Whether you&rsquo;re an&nbsp;immigrant looking for
              a&nbsp;supportive community or&nbsp;a&nbsp;company seeking high quality talent, Immigrant Techies Alberta
              welcomes you with open arms.
            </p>
            <p className={styles.text}>
              Together, we&nbsp;are rewriting the narrative, breaking barriers, and forging a&nbsp;path where everyone
              has a&nbsp;chance to&nbsp;shine. Let&rsquo;s build a&nbsp;stronger, united tech community that thrives
              on&nbsp;the strength of&nbsp;its diversity.
            </p>
          </div>
          <div className={styles.imageBlock}>
            <img src={ourMission} alt="our mission image" />
          </div>
        </div>
      </SectionMain>
    </>
  );
};

export default AboutUs;
