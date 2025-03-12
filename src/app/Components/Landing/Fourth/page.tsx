import React from "react";
import Image from "next/image";
import style from "./fourth.module.scss";

export default function Fourth() {
  return (
    <div className={style.container}>
      <h1>Кому подойдет система?</h1>
      <div className={style.timeline}>
        {/* Первый шаг (слева) */}
        <div className={`${style.step} ${style.left}`}>
          <div className={style.content}>
            <div className={style.iconWrapper}>
              <Image
                alt="arrow"
                src="/shared/icons/Vector-5.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>Фермерские хозяйства</h3>
          </div>
        </div>

        {/* Второй шаг (справа) */}
        <div className={`${style.step} ${style.right}`}>
          <div className={style.content}>
            <div className={style.iconWrapper}>
              <Image
                alt="arrow"
                src="/shared/icons/Vector-5.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>Ветеринарные клиники</h3>
          </div>
        </div>

        {/* Третий шаг (слева) */}
        <div className={`${style.step} ${style.left}`}>
          <div className={style.content}>
            <div className={style.iconWrapper}>
              <Image
                alt="arrow"
                src="/shared/icons/Vector-5.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>Сельскохозяйственные компании</h3>
          </div>
        </div>

        {/* Четвертый шаг (справа) */}
        <div className={`${style.step} ${style.right}`}>
          <div className={style.content}>
            <div className={style.iconWrapper}>
              <Image
                alt="arrow"
                src="/shared/icons/Vector-5.svg"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h3>Владельцы КРС (Крупного Рогатого Скота)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
