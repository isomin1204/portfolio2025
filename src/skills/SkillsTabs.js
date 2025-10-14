import React from "react";
import './style.css';

const careerItems = [
  {
    title: "한샘리하우스 | 인테리어 디자이너",
    date: "2020.03 – 2024.12",
    desc: `클라이언트 커뮤니케이션 및 요구사항 조율
인테리어 설계 및 공간 디자인
시공 관리 및 현장 감독`
  }
];

const educationItems = [
  {
    title: "동양미래대학교 | 실내건축디자인 졸업",
    date: "2017.03 - 2020.02",
    desc: "실내건축 설계, 공간 기획, 가구·조명·색채 디자인, 시공 관리 등 실무형 디자인을 학습"
  },

  {
  title: "코리아IT아카데미 | AI 활용 핀테크 서비스 개발자 프로그램 이수",
  date: "2025.03 - 2025.09",
  desc: "JAVA, 웹표준, DB, Servlet/JSP, Spring/Boot, Android 알고리즘 학습"
}
];

function SkillsTabs() {
  return (
    <section className="career-education-section" id="career-education">
      <div className="career-edu-container">
        {/* Career */}
        <div className="career-column">
          <h2 className="column-title">Career</h2>
          {careerItems.map((item, index) => (
            <div key={index} className="item">
              <div className="item-date">{item.date}</div>
              <div className="item-title">{item.title}</div>
              <div className="item-desc">
                <ul>
                  {item.desc.split("\n").map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="education-column">
          <h2 className="column-title">Education</h2>
          {educationItems.map((item, index) => (
            <div key={index} className="item">
              <div className="item-date">{item.date}</div>
              <div className="item-title">{item.title}</div>
              <div className="item-desc">
                <ul>
                  {item.desc.split("\n").map((line, i) => (
                    <li key={i}>{line.trim()}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsTabs;
