import styled from 'styled-components'

export const Carrocontenedor = styled.div`
    position: relative;
`

export const Carros = styled.button`
    background-Color: #F7A28A;
    border: none;
    borderRadius: 5px;
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
`
export const Listart=styled.div`
        borderRadius: 5px;
        boxShadow: 0 0 15px rgba(0, 0, 0, 0.4);
        background-Color: #fff;
        color: #000;
        padding: 10px;
        position: absolute;
        right: 0px;
        top: 50px;
        width: 400px;
`
export const Ul=styled.ul`
        listStyleType: none;
        margin: 0;
        padding: 0;
`

export const Li=styled.li`
        alignItems: center;
        border-Bottom: 1px dashed #ccc;
        display: flex;
        justify-Content:space-between;
        margin-Bottom: 10px;
        padding-Bottom: 5px;
`

export const Delete=styled.button`
        border: none;
        background-Color: #fb0207;
        borderRadius: 50%;
        color: #fff;
        cursor: pointer;
        fontSize: 0.6em;
        padding: 2px 5px;
`
