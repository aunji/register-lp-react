<?php
class Costumer_register
{
    /**
     *
     */
    public function __construct()
    {
    }

    /**
     *
     */
    public function __destruct()
    {
    }
    
    /**
     * Set friendly columns\' names to order tables\' entries
     */
    public function setOrderingValues()
    {
        $ordering = [
            'id' => 'Id',
            'name' => 'Name',
            'surname' => 'Surname',
            'tel' => 'Tel',
            'email' => 'Email',
            'password' => 'Password',
            'occupation' => 'Occupation',
            'address' => 'Address',
            'district' => 'District',
            'city' => 'City',
            'province' => 'Province',
            'zip' => 'Zip',
            'location_id' => 'Location_id',
            'bank_id' => 'Bank_id',
            'amount' => 'Amount',
            'date' => 'Date',
            'time' => 'Time',
            'path' => 'Path',
            'created' => 'Created',
        ];

        return $ordering;
    }
}
?>
