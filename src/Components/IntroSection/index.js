import React from 'react'
import { IntroContainer, LinkWrapper,Logo, SiteLink, IntroWrapper } from './IntroElements'

const IntroSection = () => {
    return (
        <IntroContainer>
            <IntroWrapper>
                <Logo>DC API Front-End</Logo>
                <LinkWrapper>
                    <SiteLink>Blog API</SiteLink>
                    <SiteLink>BLOG</SiteLink>
                    <SiteLink>GITHUB</SiteLink>
                </LinkWrapper>
            </IntroWrapper>
        </IntroContainer>
    )
}

export default IntroSection
