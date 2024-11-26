import React from 'react';

export default function Title({ text, className}) {
  return (
    <h1 className={className}>
      {!text ? "Title" : text} {/* عرض النص الافتراضي "Title" إذا لم يتم تمرير أي نص، وإلا عرض النص الممرر */}
    </h1>
  )
}
