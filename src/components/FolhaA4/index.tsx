import * as S from './styles';

interface FolhaA4Props {
    children?: React.ReactNode
}

export const FolhaA4 = ({children}: FolhaA4Props) => {
    return (
        <S.Container>
            {children}
        </S.Container>
     )
}