"use client";

const sections = [
  { title: "Adults only", body: "pull is intended only for people aged 18 or older. Do not create, use or manage an account for anyone under 18. Do not claim to be an adult if you are not." },
  { title: "Consent and boundaries", body: "Respect every person's choices. A match, like, reply or previous date is never consent to sexual activity, images or continued contact. Stop when someone says no, withdraws consent or asks you to stop." },
  { title: "Be genuine", body: "Use a truthful, current representation of yourself. Do not impersonate another person, use stolen photos, misrepresent your age or relationship status, or create deceptive duplicate accounts." },
  { title: "No harassment or abuse", body: "Threats, intimidation, stalking, blackmail, hate-based abuse, repeated unwanted contact and attempts to expose another person's private information are not acceptable." },
  { title: "No scams or exploitation", body: "Do not solicit money, gifts, financial details or account access through deception. Do not promote trafficking, coercion, exploitation, paid sexual services or arrangements that violate applicable law." },
  { title: "Keep content appropriate", body: "Do not post illegal content, sexual content involving minors, non-consensual intimate imagery, or content that depicts or promotes violence or exploitation. Do not use profiles to advertise explicit services." },
  { title: "Protect privacy", body: "Do not publish another person's address, phone number, workplace, private messages or identifying information without permission. Avoid sharing precise live location publicly." },
  { title: "Use the platform responsibly", body: "Do not spam, scrape profiles, automate interactions, manipulate engagement or attempt to bypass age, safety or account controls." }
];

export default function GuidelinesPage() {
  return <main className="container" style={{ maxWidth: 860, padding: "42px 0 72px" }}>
    <a href="/">← Back to pull</a>
    <section style={{ margin: "24px 0 30px" }}>
      <span className="pill" style={{ color: "#a12b53", fontWeight: 800 }}>COMMUNITY STANDARDS · DRAFT</span>
      <h1 className="serif" style={{ fontSize: 46, color: "#641b3b", marginBottom: 8 }}>Good connections need respect.</h1>
      <p className="muted" style={{ lineHeight: 1.8 }}>These draft rules set expectations for an adult-only community built around honesty, consent and personal safety. They require legal and operational review before launch.</p>
    </section>
    <div style={{ display: "grid", gap: 14 }}>
      {sections.map((section, index) => <article className="feature" key={section.title}>
        <h2 style={{ color: "#641b3b", margin: "0 0 8px", fontSize: 20 }}>{index + 1}. {section.title}</h2>
        <p className="muted" style={{ lineHeight: 1.8, margin: 0 }}>{section.body}</p>
      </article>)}
    </div>
    <section className="feature" style={{ marginTop: 20 }}>
      <h2 style={{ color: "#641b3b", marginTop: 0 }}>How to raise a concern</h2>
      <p className="muted" style={{ lineHeight: 1.8 }}>Use the Safety Centre preview to understand the planned reporting experience. It does not submit a real report and is not monitored. If you face immediate danger, contact local emergency services or a trusted local support organisation.</p>
      <a className="btn btn-dark" href="/safety">Visit Safety Centre</a>
    </section>
    <p className="muted" style={{ fontSize: 12, marginTop: 22 }}>Draft only. Enforcement, appeals, moderator coverage and reporting are not live. The final rules must be reviewed for every supported country and published with a working complaint route.</p>
  </main>;
}
