import React, {useState} from 'react';
import {Autocomplete, Stack, TextField} from "@mui/material";
import {ISingleAsset} from "../../common/types/assets/iAssets";
import {useAppSelector} from "../../utils/hook";
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const assetsArray: ISingleAsset[] = useAppSelector(state => state.assets.assets);
    const navigate = useNavigate();
    const [selectItem, setSelectItem] = useState<string | null>('')
    return (
        <Stack spacing={2} sx={{width: 300}}>
            <Autocomplete value={selectItem}
                          onChange={(event: any, value: string | null) => {
                              navigate(`single/${value}`)
                              setSelectItem(null)
                          }}
                          renderInput={
                              (element) => (
                                  <TextField {...element}
                                             label={'Поиск'}
                                             inputProps={{
                                                 ...element.inputProps,
                                                 type: 'search'
                                             }}
                                  />
                              )}
                          options={assetsArray.map(
                              (element: { name: string }) => element.name)
                          }/>

        </Stack>
    );
};

export default SearchBar;