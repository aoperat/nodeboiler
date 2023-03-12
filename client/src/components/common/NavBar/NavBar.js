//NavBar.js
import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function NavBar() {

  const user = useSelector(state => state.user.userData);
  const isAuthenticated = user && user.isAuth; // user 객체가 정의되어 있는지 확인 후에 isAuth 값에 접근합니다.
  console.log(isAuthenticated);

  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">미자</Navbar.Brand>
          <Nav className="me-auto">
            {isAuthenticated && <Nav.Link href="/expenseHistory">지출내역</Nav.Link>}
            {/* <Nav.Link href="/fixedExpenses">고정비</Nav.Link> */}
            {isAuthenticated && <Nav.Link href="/total">종합</Nav.Link>}

            {isAuthenticated && <Nav.Link href="/myCard">내카드</Nav.Link>}
            {/* <Nav.Link href="#pricing">목표</Nav.Link> */}

          </Nav>
          <Nav>
            {!isAuthenticated && <Nav.Link href="/register">회원가입</Nav.Link>}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar