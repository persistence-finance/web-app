import { Notifications } from "../Notification"
import { WalletAddress } from "../Wallet"
import styled from "styled-components"
import { Row } from "../Flex"

export const AccountBar = () => {
  return <Wrapper>
    <Notifications />
    <WalletAddress />
  </Wrapper>
}

const Wrapper = styled(Row)`
  justify-content: flex-end;
`