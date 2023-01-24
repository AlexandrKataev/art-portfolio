import { getDownloadURL, listAll, ref } from 'firebase/storage';
import { FC, useEffect, useState } from 'react';
import { listRef, storage } from 'shared/api/firebase';
import styles from './Gallery.module.scss';

const imageUrl2 = [
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(1).jpg?alt=media&token=66bd472d-9c0d-4acf-abe0-03b73e2467a3',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(10).jpg?alt=media&token=2b205a90-eaf8-4142-bdaa-f339ab38772e',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(11).jpg?alt=media&token=6f3af71c-0b3d-453c-9727-546710e85205',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(21).jpg?alt=media&token=dc4fb050-4530-4a71-84f5-a80954804c34',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(2).jpg?alt=media&token=860e680a-dc70-4210-9142-bd9f9c9bd137',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(9).jpg?alt=media&token=0ace56c1-290d-4b38-892a-ff415aaac9e1',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(12).jpg?alt=media&token=5e7dcecf-df6e-4edb-93a1-4ddb27b1f762',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1.jpg?alt=media&token=3d47208f-f5a8-42b0-bf69-065d46d3496d',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(10).jpg?alt=media&token=9edbd05f-3d88-4621-be3f-2dea637b578e',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(5).jpg?alt=media&token=1868f7e0-100e-4e89-8438-2159a42c3c69',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(11).jpg?alt=media&token=b803c410-bb3f-433c-bba0-995ccd342a84',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(16).jpg?alt=media&token=8829a6a9-3028-43ca-ad6c-72b27c9298ee',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(2).jpg?alt=media&token=b624c370-4be5-407c-aa8e-11d68d32cbd1',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(6).jpg?alt=media&token=d9321924-d6ed-456d-af1a-d2675c036f7d',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(4).jpg?alt=media&token=fafef91f-7f14-4626-b37b-840e8d049d47',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(2).jpg?alt=media&token=d59a2b68-4e62-485a-9d51-98ca99c7deba',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(7).jpg?alt=media&token=561faa67-5b64-470c-8f3f-f6df3b31e917',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2.jpg?alt=media&token=7b07293f-f471-432a-ae1d-36e5fd19d244',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(4).jpg?alt=media&token=7c668137-a9c4-4a0d-90d2-c5a12a5913fb',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(8).jpg?alt=media&token=9dcbe425-ce50-4f90-a670-ef91aea7b972',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(13).jpg?alt=media&token=554097a0-6f96-4ecd-90b4-36bbebecf5a3',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(12).jpg?alt=media&token=a340fbc2-f112-4b7e-b9df-04f8246b2fea',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(14).jpg?alt=media&token=075ca098-fdd1-4b61-9d1a-f561fe207d7e',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(15).jpg?alt=media&token=4804961b-3a63-46c9-848d-5fa447b964cf',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(17).jpg?alt=media&token=635b7a2f-0947-47e8-a265-05fc4744d3b4',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(16).jpg?alt=media&token=17573e34-569b-4a43-adcf-8b438275a470',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(19).jpg?alt=media&token=f545ddf8-c4a9-470c-9a5c-231b5e459978',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(20).jpg?alt=media&token=403fcbee-2540-403f-a86b-fa11e080e8cd',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(22).jpg?alt=media&token=c74e607b-29dc-401e-b91c-c652516e10db',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(23).jpg?alt=media&token=98196b40-10f7-4922-9fc5-042fac20543d',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(18).jpg?alt=media&token=4c6992e4-9e95-4a7e-8d08-fa4c91bbaf23',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(6).jpg?alt=media&token=e3c11ee7-dc94-44af-8152-cbb2d537f972',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(24).jpg?alt=media&token=9c4a47d9-7bf9-49cf-a7d2-61631e65988b',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(26).jpg?alt=media&token=17af7cb2-cd1e-4b15-bc23-4d8457ee3d82',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(27).jpg?alt=media&token=1965b951-b44a-4bda-87ca-fad374e09d9e',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(4).jpg?alt=media&token=f693c4a9-752e-492c-91b3-1a7c6ae1a366',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(5).jpg?alt=media&token=6b4934dc-93cc-40ae-ac63-d8158452a86c',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(8).jpg?alt=media&token=02fdb8ca-a5b1-47ff-bc0c-09106bf59111',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F1%20(7).jpg?alt=media&token=3784da54-7a89-4905-a86d-977375fbc552',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F11.jpg?alt=media&token=4d8d02f9-9c4f-42dd-98f4-972d3b07c77b',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F11%20(2).jpg?alt=media&token=18fd707a-ab4b-4302-9d4e-9d4846999659',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F11%20(3).jpg?alt=media&token=c8c22ae2-ec09-4813-89b3-aa3993091a4a',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(13).jpg?alt=media&token=9db1c605-752c-4098-b7d9-fd929e0c5270',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(17).jpg?alt=media&token=5e1346bc-5eb6-46bc-996e-f642a9595986',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(18).jpg?alt=media&token=5b72bc64-25dd-442d-86b9-4b73d341a28a',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(3).jpg?alt=media&token=a3caa409-56ec-446a-ae78-703049c45eec',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2FXk8n7iId_vtTAYkThPoup7tGn4E9WRM_BuaPzvy-ITqXz5yInOhEMHhocj6M-f4sJBMqrPOzyzTP5KzBMPuJEqK8.jpg?alt=media&token=fa1aae66-dddb-41b8-adea-c869ab077162',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(19).jpg?alt=media&token=57a49e2e-e6d3-488a-967b-816c49511a0b',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(15).jpg?alt=media&token=481d762a-33c1-4f77-ad4c-8103be525884',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F33.jpg?alt=media&token=2d03f8d6-7cfd-4acb-939d-541b8b1bac51',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(7).jpg?alt=media&token=4482d812-67a6-46ff-8f27-9d6e766fea6c',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2FWxPmog-9A14.jpg?alt=media&token=1d8c4602-4ff3-42b0-84d8-43fe54ec8710',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2Fd8EI4AztekY.jpg?alt=media&token=71ded2d8-e73d-4dac-8005-13b1b41e8cb7',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F2%20(9).jpg?alt=media&token=ab10e33f-7718-40e9-9398-3bad40ab1078',
  'https://firebasestorage.googleapis.com/v0/b/art-portfolio-436e2.appspot.com/o/dream%2F3%20(3).jpg?alt=media&token=a2c9526e-f29e-4c63-8b44-601027343142',
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
