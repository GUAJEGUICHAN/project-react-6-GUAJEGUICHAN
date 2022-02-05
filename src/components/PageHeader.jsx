import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import { AiFillHome } from 'react-icons/ai';

const Header = styled.h1`
  margin:0 1em;
  display:flex;
  justify-content:space-between;
`;

const Span = styled.span`
`;

export default function PageHeader({ children }) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Header>
      <Span data-testid="goBack" onClick={goBack}>
        <AiFillHome />
      </Span>
      <Span>
        {children}
      </Span>
      <Link data-testid="goHome" style={{ textDecoration: 'none', color: '#000' }} to="/">
        <AiFillHome />
      </Link>
    </Header>
  );
}
