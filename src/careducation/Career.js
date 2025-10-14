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

function Career() {
  return (
    <section className="career-section" id="career">
      <div className="career-container">
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
    </section>
  );
}

export default Career;
