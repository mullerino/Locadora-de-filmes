import React, { useState } from 'react';

import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

import { House, PlusCircle, FilmReel, CaretCircleDoubleLeft, CaretCircleDoubleRight } from '@phosphor-icons/react'

import styles from './index.module.css'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

const items: MenuItem[] = [
    getItem('Início', '1', <House size={18}/>),
    getItem('Adicionar um filme', '2', <PlusCircle size={18} />),
    getItem('Alugados', '3', <FilmReel size={18} />),
]

const SideBarLeft = ()=>{

    return (
        <div>
            <div className={styles.logo}>
                <img src="imgs/Logo_transparente.png" alt="Logo da locadora" />
            </div>
            <Menu
                mode="inline"
                items={items}
                theme='dark'
                style={{
                    backgroundColor: "#001529",
                    color: "#dccfcf"
                }}
                
            />
        </div>
    )
}

export default SideBarLeft