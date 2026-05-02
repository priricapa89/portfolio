export function CloudinaryTip() {
  return (
    <div className="cloud-tip">
      <span className="ci">☁️</span>
      <p>
        <strong>How to add photos without redeploying:</strong> Go to{" "}
        <a href="https://cloudinary.com" target="_blank" rel="noreferrer">Cloudinary.com</a> →
        create a free account → upload any photo → copy the URL it gives you → paste it into the{" "}
        <code>imgSrc</code> field in the photo data in{" "}
        <code>app/components/gallery/data.ts</code>. Done.
      </p>
    </div>
  );
}
