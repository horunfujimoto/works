import React from 'react';

export default function Home() {
  return (
    <div className="container mt-5">
      <header className="mb-4 text-center">
        <h1 className="display-4 text-primary">Welcome to My Site</h1>
        <p className="lead text-secondary">
          Bootstrapでスタイリッシュに作ったReactのホームページです。
        </p>
      </header>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://source.unsplash.com/600x400/?nature"
              className="card-img-top"
              alt="Nature"
            />
            <div className="card-body">
              <h5 className="card-title">自然の美しさ</h5>
              <p className="card-text">
                美しい自然の風景をお楽しみください。ReactとBootstrapで簡単に作成できます。
              </p>
              <button className="btn btn-primary">詳しく見る</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100">
            <img
              src="https://source.unsplash.com/600x400/?technology"
              className="card-img-top"
              alt="Technology"
            />
            <div className="card-body">
              <h5 className="card-title">最新テクノロジー</h5>
              <p className="card-text">
                テクノロジーの進歩について紹介しています。Bootstrapのカードで見やすく整理。
              </p>
              <button className="btn btn-success">もっと知る</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center mt-5 mb-3 text-muted">
        © 2025 Your Company. All rights reserved.
      </footer>
    </div>
  );
}
