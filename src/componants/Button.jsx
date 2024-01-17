export default function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

export function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}
