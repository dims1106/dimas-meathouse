  export default function About() {
    return (
      <div className="container py-5 mt-5 text-center">
        <h1 className="fw-bold mb-4">Dims Meathouse</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
              <strong>Dims Meathouse</strong> berawal dari hal sederhana ketika  sang pemilik sudah rapi dengan setelan terbaiknya , tapi rencana makan malamnya batal karena sang kekasih menghilang tanpa kabar.
            </p>
            <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
              lalu, dimas memutuskan untuk membangun restoran steak mewahnya sendiri. Restoran ini didedikasikan untuk siapa saja yang ingin menikmati daging berkualitas tanpa bergantung pada siapa pendampingnya.
            </p>

            <div className="card border-0 shadow-sm p-4 bg-light rounded-4">
              <h4 className="fw-bold mb-3 text-dark">Filosofi Kami</h4>
              <p className="fs-5 text-dark fw-medium mb-2">
                "Teman kencan bisa mendadak batal, tapi kematangan Wagyu medium-rare tidak pernah mengecewakan."
              </p>
              <p className="small text-muted mb-0">
                Selamat menikmati sajian daging terbaik dengan suasana berkelas.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }