//consigo dar o meu nome para o Link do next, por isso NextLink
import NextLink from "next/link"


export default function Link({children,href,...props}) {
    return (
        <NextLink href={href} legacyBehavior>
            <a {...props}>{children}</a>
        </NextLink>
    )
}