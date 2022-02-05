import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { useSelector } from 'react-redux';

const Wrapper = styled.div``;

export default function HomePage() {
  const { date } = useSelector((state) => ({
    date: state.date,
  }));
  return (
    <Wrapper>
      <h1>
        HomePage /
        {date}
      </h1>
      <Link to="/check">CheckPage</Link>
    </Wrapper>
  );
}
