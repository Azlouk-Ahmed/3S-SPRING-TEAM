import React from "react";
import { TbStar } from "react-icons/tb";
import { TbStarFilled } from "react-icons/tb";

function Slide() {
  return (
    <div class="card swiper-slide">
                <div class="image-content">
                    <span class="overlay-swiper"></span>
                    <div class="card-image">
                        <img src="/image/Laura-Smith-square.jpg" alt="" class="card-img" />
                    </div>
                </div>
                <div class="card-content">
                    <h2 class="name">laura bora</h2>
                    <div className="df">
                    <TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStar />

                    </div>
                    <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, rem maiores. Distinctio doloribus nesciunt reprehenderit aperiam similique tempora ex neque. Obcaecati nisi reprehenderit labore dolore repellat ducimus voluptatem accusamus non!</p>
                </div>
            </div>
  );
}

export default Slide;
