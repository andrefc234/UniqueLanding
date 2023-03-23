import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Conocenos.module.css';

interface Props {
  className?: string;
}
/* @figmaId 42:105 */
export const Conocenos: FC<Props> = memo(function Conocenos(props = {}) {
  return (
    <>
      <div className={classes.conocenos}>Conócenos</div>
      <div className={classes.enUniqueLivingSomosUnGrupoJove}>
        <div className={classes.textBlock}>
          En Unique Living somos un grupo joven de creativos que nos gusta disfrutar de lo que hacemos. Creemos que la
          arquitectura no tiene por qué ser seria y aburrida. Siempre hemos pensado que un buen diseño arquitectónico
          puede hacernos reír, soñar e incluso bailar.
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
        <div className={classes.textBlock3}>
          Por supuesto, eso no significa que no tomemos la arquitectura en serio. Buscamos ofrecer espacios donde la
          creatividad se mezcle con la funcionalidad y la estética, y satisfacer las necesidades de nuestros clientes
          divirtiéndonos un poco en el proceso.
        </div>
        <div className={classes.textBlock4}>
          <p></p>
        </div>
        <div className={classes.textBlock5}>
          Te aseguramos que mientras diseñamos y construimos tu casa de ensueño, disfrutaremos junto a ti cada paso dado
          en el desarrollo de tu nuevo espacio favorito.
        </div>
      </div>
      <div className={classes.jARDIN1}></div>
      <div className={classes.rectangle2}></div>
      <div className={classes._20}>20</div>
      <div className={classes.anosDeExperiencia}>años de experiencia</div>
    </>
  );
});
