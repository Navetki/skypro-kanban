import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.nav`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const HeaderBtnMainNew = styled.button`
  width: auto;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  padding: 8px 24px;
  white-space: nowrap;

  a {
    color: #ffffff;
    text-decoration: none;
  }
  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
  }
`;
export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;
export const PopUserSet = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
  width: auto;
  min-width: 213px;
  height: auto;

  .dark-theme & {
    background-color: #20202c;
    border-color: #4e5566;
    box-shadow: 0px 10px 39px 10px rgba(0, 0, 0, 0.5);
  }

  p.name {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;

    .dark-theme & {
      color: #ffffff;
    }
  }

  p.mail {
    color: #94a6be;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
  }

  .pop-user-set__theme {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    p {
      color: #000;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: -0.14px;
      margin-bottom: 0;

      .dark-theme & {
        color: #ffffff;
      }
    }

    input[type="checkbox"] {
      position: relative;
      width: 24px;
      height: 13px;
      border-radius: 100px;
      background: #eaeef6;
      outline: none;
      appearance: none;
      cursor: pointer;

      &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: #94a6be;
        transition: 0.5s;
      }
      &:checked::before {
        left: 12px;
        background-color: #565eef;
      }
    }
  }

  button {
    width: 100%;
    height: 30px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid ${(props) => (props.$isDark ? "#FFFFFF" : "#565eef")};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    a {
      color: ${(props) => (props.$isDark ? "#FFFFFF" : "#565eef")};
      text-decoration: none;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    &:hover {
      background-color: ${(props) => (props.$isDark ? "#FFFFFF" : "#33399b")};
      a {
        color: ${(props) => (props.$isDark ? "#565EEF" : "#FFFFFF")};
      }
    }
  }
`;
