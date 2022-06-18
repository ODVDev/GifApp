import { shallow } from "enzyme";
import React from "react";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => { 


    const title= 'un titulo';
    const url= 'https://localhost/algo.jpg';
    const wrapper= shallow(<GifGridItem title={title} url={url} />)
    

    test('debe de mostrar el componente correctamente', () => { 
        


            expect(wrapper).toMatchSnapshot();

     })

     test('debe tener un parrafo con el title', () => { 
         
            const p= wrapper.find('p');
            expect(p.text().trim()).toBe(title);

      })

      

 })