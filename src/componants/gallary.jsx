import { MyCard, Profile } from "./somecomfonant";

function InnerProfile() {
  return (
    <div>
      <h1>My name is Emrul Hassan Biplob</h1>
      <p>I AM 225 Years old boy!</p>
      <Profile />
      <MyCard />
    </div>
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>This is a Test Heading</h1>
      <InnerProfile />
    </section>
  );
}
