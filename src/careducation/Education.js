import React from "react";
import './style.css';

const educationItems = [
  {
    title: "동양미래대학교 | 실내건축디자인 졸업",
    date: "2017.03 - 2020.02",
    desc: "실내건축 설계, 공간 기획, 가구·조명·색채 디자인, 시공 관리 등 실무형 디자인 학습"
  },
  {
    title: "코리아IT아카데미 | AI 활용 핀테크 서비스 개발자 프로그램 이수",
    date: "2025.03 - 2025.09",
    desc: "JAVA, 웹표준, DB, Servlet/JSP, Spring/Boot, Android 알고리즘 학습"
  }
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
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
    </section>
  );
}

export default Education;
