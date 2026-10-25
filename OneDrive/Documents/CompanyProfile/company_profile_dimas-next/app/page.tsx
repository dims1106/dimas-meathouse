import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="banner-section py-5">
      <div className="container">
        <div className="row align-items-center g-4 flex-column-reverse flex-lg-row mt-4">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="subtitle text-uppercase fw-bold mb-3 text-danger">Steak Terbaik 1 TANGERANG SELATAN!!</p>
            <h1 className="banner-title fw-bold lh-sm mb-3">Selamat Datang di Dims Meathouse! </h1>
            <p className="banner-text mb-4">
              Tempat di mana daging sapi diperlakukan lebih romantis daripada mantan kamu. 
              Kami percaya bahwa setiap potongan daging berhak mendapatkan penghormatan terakhir di atas panggangan terbaik kami, sebelum akhirnya berakhir bahagia di perutmu. 

            </p>
            <Link href="/about" className="btn btn-dark rounded-pill px-4 py-2">Kepoin Kami</Link>
          </div>
          <div className="col-lg-6 text-center">
            <Image
                src="/steak.jpeg"
                alt="Steak Menggugah Selera"
                className="img-fluid rounded shadow-lg"
                width={200}
                height={50}
                style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}