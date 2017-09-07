#!/bin/bash
cd ${0%/*}

curl -LOk http://digm.drexel.edu/crs/IDM231/cdn/workshop.zip
curl -LOk http://digm.drexel.edu/crs/IDM231/cdn/zodiac.zip

mv *.zip ../.

echo
echo "Download complete."
cd ../
ls -l *.zip

echo
read -p "Unzip files now? " -n 1 -r

if [[ $REPLY =~ ^[Yy]$ ]]
then
  unzip '*.zip'
fi
