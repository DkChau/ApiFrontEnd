import React from 'react'
import { IntroContainer, LinkWrapper,Logo, SiteLink, IntroWrapper } from './IntroElements'

const IntroSection = () => {
    return (
        <IntroContainer>
            <IntroWrapper>
                <Logo>DC API Front-End</Logo>
                <LinkWrapper>
                    <SiteLink href={`https://github.com/novaark/BlogApi`} target='_blank'>Blog API</SiteLink>
                    <SiteLink href={`https://novaark.github.io/Blog/`} target='_blank'>Blog</SiteLink>
                    <SiteLink href={`https://github.com/novaark/ApiFrontEnd`} target='_blank'>Source Code</SiteLink>
                </LinkWrapper>
            </IntroWrapper>
        </IntroContainer>
    )
}

export default IntroSection
