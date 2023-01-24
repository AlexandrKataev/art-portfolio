import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { FC, useEffect, useState } from 'react';
import { listRef, storage } from 'shared/api/firebase';
import styles from './Gallery.module.scss';

const imageUrl2 = [
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1.jpg?alt=media&token=3d47208f-f5a8-42b0-bf69-065d46d3496d',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(2).jpg?alt=media&token=b624c370-4be5-407c-aa8e-11d68d32cbd1',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(6).jpg?alt=media&token=d9321924-d6ed-456d-af1a-d2675c036f7d',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(10).jpg?alt=media&token=2b205a90-eaf8-4142-bdaa-f339ab38772e',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(2).jpg?alt=media&token=860e680a-dc70-4210-9142-bd9f9c9bd137',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(1).jpg?alt=media&token=66bd472d-9c0d-4acf-abe0-03b73e2467a3',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(21).jpg?alt=media&token=dc4fb050-4530-4a71-84f5-a80954804c34',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(9).jpg?alt=media&token=0ace56c1-290d-4b38-892a-ff415aaac9e1',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(11).jpg?alt=media&token=b803c410-bb3f-433c-bba0-995ccd342a84',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(16).jpg?alt=media&token=8829a6a9-3028-43ca-ad6c-72b27c9298ee',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(11).jpg?alt=media&token=6f3af71c-0b3d-453c-9727-546710e85205',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(4).jpg?alt=media&token=7c668137-a9c4-4a0d-90d2-c5a12a5913fb',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(12).jpg?alt=media&token=5e7dcecf-df6e-4edb-93a1-4ddb27b1f762',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(2).jpg?alt=media&token=d59a2b68-4e62-485a-9d51-98ca99c7deba',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(5).jpg?alt=media&token=1868f7e0-100e-4e89-8438-2159a42c3c69',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(8).jpg?alt=media&token=9dcbe425-ce50-4f90-a670-ef91aea7b972',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2.jpg?alt=media&token=7b07293f-f471-432a-ae1d-36e5fd19d244',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(10).jpg?alt=media&token=9edbd05f-3d88-4621-be3f-2dea637b578e',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(4).jpg?alt=media&token=fafef91f-7f14-4626-b37b-840e8d049d47',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(7).jpg?alt=media&token=561faa67-5b64-470c-8f3f-f6df3b31e917',
];

export const Gallery: FC = () => {
  const [imageUrl, setImageUrl] = useState(['']);

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        const myArray: string[] = [];
        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef).then((url) => {
            myArray.push(url.toString());
          });
        });
        setImageUrl(myArray);
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);

  const images = imageUrl2.map((el) => {
    console.log(el);
    return <img src={el} key={el} />;
  });

  return (
    <div className={styles.container}>
      {images}
      {imageUrl && (
        <img src="https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(10).jpg?alt=media&token=2b205a90-eaf8-4142-bdaa-f339ab38772e" />
      )}
    </div>
  );
};
