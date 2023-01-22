import React from 'react';

export default function Figure({ imageSrc, caption, imageCredit }) {
  return (
    <div className="text--center">
      <img src={require(`@site/static/img/${imageSrc}`).default} />
      <p className="text--center">
        {caption} {imageCredit && <>{<a href={imageCredit}>Image credit</a>}</>}
      </p>
    </div>
  );
}
