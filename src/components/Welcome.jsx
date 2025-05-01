import React from 'react'

export default function Welcome({age, title}) {


  return (
    <section style={{ textAlign: "center", margin: "40px 0" }}>
    <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
      Welcome to Our School: {title}
    </h2>
    <p style={{ fontSize: "18px", color: "#666" }}>
      Learn, Grow, and Succeed with us: {age}
    </p>
  </section>
  )
}
